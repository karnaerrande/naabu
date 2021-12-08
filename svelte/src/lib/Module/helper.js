import { getMapSaveData } from "$lib/Map/helper.js";

export function filterSelectedActivities(module, currentLocationId, userModule) {
  let filteredLocationActivities = [];

  let locationGoals = getGoalsFromLocationId(module, currentLocationId);
  let locationGoalIds = locationGoals.map(goal => goal.id);
  console.log(locationGoalIds);

  for (let i = 0; i < userModule.selectedActivities.length; i++) {
    let activity = userModule.selectedActivities[i];
    if (locationGoalIds.includes(activity.goalId)) {
      filteredLocationActivities.push(activity);
    }
  }
  // Round robin.
  // while you don't have 6 activities selected?
  // loop trhough location goals.
  // pick top activity from filteredActivities.

  let filteredActivities = [];
  let finished = false;
  let i = 0;
  while (!finished) {
    if (filteredActivites.length >= 6) {
      finished = true;
    }
    if (filteredLocationActivities.length === 0) {
      finished = true;
    }

    let goalIdToSelectActivityFrom = locationGoalIds[i];
    for (let i = 0; i < filteredLocationActivities.length; i++) {
      if (filteredLocationActivities.goalId === goalIdToSelectActivityFrom) {
        filteredActivities.push(filteredLocationActivities[i]);
        filteredLocationActivities.splice(i, 1);
        break;
      }
    }
    i++;
    if (i > locationGoalIds.length) {
      i = 0;
    }
  }
  
  // Sort using the difficulty distance.
  // Prefer activities that are have a lower userGoalScore.
  userModule.filteredActivities = filteredActivities;
  return userModule;
}


export function formatMapObject(module, keepMap = false, formatPoints = true, moduleMap = true) {
  let saveData = {
    moduleName: module.moduleName,
    moduleDescription: module.moduleDescription,
    moduleSvg: module.moduleSvg,
  }

  let map;
  let processMap = false;
  if (moduleMap) {
    if (module.map) {
      map = module.map;
      processMap = true;
    }
  }
  else if (module.mapId) {
    map = module;
    processMap = true;
  }

  if (processMap) {
    let mapData = getMapSaveData(map, formatPoints)
    mapData.mapId = map.mapId;
    saveData = { ...saveData, ...mapData };
    if (keepMap) {
      saveData.map = module.map;
    }
  }

  return saveData;
}

export function getGoalsFromLocationId(module, locationId) {
  let goals = [];
  if (module.locations) {
    for (let i = 0; i < module.locations.length; i++) {
      let location = module.locations[i];
      if (location.id === locationId) {
        goals = location.goals;
        break;
      }
    }
  }
  return goals;
}


export function getModuleSaveData(module) {
  return formatMapObject(module);
}

export async function retrieveMapsListFB(db, authorId) {
  let ref = db.collection("modules").where("authorId", "==", authorId).orderBy("modifiedAt", "desc");
  let snapshot = await ref.get();
  let modules = [];
  snapshot.forEach(doc => {
    let module = doc.data();
    module.id = doc.id;
    modules.push(module);
  });
  return modules;
}

export async function getUserModule(firebase, moduleId, module, player) {
  let db = await firebase.firestore();
  let userModule = null;
  if (player && module) {
    let userModuleRef = db
      .collection("modules/" + moduleId + "/players")
      .doc(player.id);
    const userModuleSnap = await userModuleRef.get();
    if (userModuleSnap.exists) {
      userModule = userModuleSnap.data();
      userModule.id = player.id;
    }
    else {
      let startLocations = [];
      for (let i = 0; i < module.locations.length; i++) {
        if (module.locations[i].isStartLocation) {
          startLocations.push(module.locations[i].id);
        }
      }

      let userModuleData = {
        unlockedLocations: startLocations,
        succeededLocations: [],
        selectedAdventures: [],
        selectedActivities: [],
      }
      let moduleCollectionRef = db.collection("modules/" + moduleId + "/players")
      let result = await moduleCollectionRef.doc(player.id).set(userModuleData);
      userModule = userModuleData;
    }
  }
  return userModule;
}

