function g(t,l=!0){let a=[];for(let o=0;o<t.locations.length;o++){let n={id:t.locations[o].id,isStartLocation:t.locations[o].isStartLocation,accessLocations:t.locations[o].accessLocations,name:t.locations[o].name,textPositionX:t.locations[o].textPositionX,textPositionY:t.locations[o].textPositionY,markerPositionX:t.locations[o].markerPositionX,markerPositionY:t.locations[o].markerPositionY},s=[];for(let e=0;e<t.locations[o].goals.length;e++){let c={title:t.locations[o].goals[e].title};t.locations[o].goals[e].objectID?c.id=t.locations[o].goals[e].objectID:c.id=t.locations[o].goals[e].id,s.push(c)}n.goals=s,a.push(n)}let i=[];for(let o=0;o<t.paths.length;o++){let n={};n.startLocation=t.paths[o].startLocation,n.endLocation=t.paths[o].endLocation,l?n.points=JSON.stringify(t.paths[o].points):n.points=t.paths[o].points,n.startLocationName=t.paths[o].startLocationName,n.endLocationName=t.paths[o].endLocationName,n.endLocationIndex=t.paths[o].endLocationIndex,i.push(n)}return{title:t.title,image:t.image,locations:a,paths:i}}function L(t,l,a){for(let i=0;i<t.paths.length;i++)if(t.paths[i].startLocation===l&&t.paths[i].endLocation===a)return t.paths[i];return!1}function P(t){let l=[];for(let a=0;a<t.locations.length;a++){let i=t.locations[a],h=i.markerPositionX,o=i.markerPositionY;for(let n=0;n<i.accessLocations.length;n++)for(let s=0;s<t.locations.length;s++)if(t.locations[s].id===i.accessLocations[n]){let e=t.locations[s].markerPositionX,c=t.locations[s].markerPositionY,d=[[o,h],[c,e]],r=L(t,i.id,t.locations[s].id);r&&(r.points[0]=[o,h],r.points[r.points.length-1]=[c,e],d=r.points),l.push({startLocation:i.id,startLocationName:i.name,endLocation:t.locations[s].id,endLocationName:t.locations[s].name,endLocationIndex:s,points:d})}}t.paths=l}export{P as a,g};