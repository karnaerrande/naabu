import base from '@playwright/test';

export const test = base.extend({
  domain: 'http://localhost:3000',
  showAllConsole: false
});

const expect = base.expect;

function printMessages(page, showAllConsole) {
  page.on("console", (message) => {
    if (message.type() === "error" || showAllConsole) {
      console.log(message.text());
    }
  })
}

test.afterEach(async ({ page, domain, showAllConsole }, testInfo) => {
  test.slow();
  printMessages(page, showAllConsole);
  await page.goto(domain + '/cypress/usermodule/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/feedbackAndScores/deletegoalscanmoderateunlocklocationonmap@example.com/password/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/usermodule/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/module/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/map/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/connection/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/activity/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/revision/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/goal/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/player/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/curriculumProfile/clear');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/user/deletegoalscanmoderateunlocklocationonmap@example.com/clear');
  await page.waitForSelector('[data-test=complete]');
});

test('Unlock location on map test', async ({ page, domain, showAllConsole }) => {
  printMessages(page, showAllConsole);

  await page.goto(domain + '/cypress/user/deletegoalscanmoderateunlocklocationonmap@example.com/password/login');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/user/logout');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/user/deletegoalscanmoderateunlocklocationonmap@example.com/password/login');
  await page.waitForSelector('[data-test=complete]');

  await page.goto(domain + '/cypress/curriculumProfile/add');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/goal/add');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/activity/add');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/connection/add');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/map/unlock-locations-map/add');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/module/unlock-locations-map/module-unlock-test/add');
  await page.waitForSelector('[data-test=complete]');
  await page.goto(domain + '/cypress/user/logout');
  await page.waitForSelector('[data-test=complete]');
  await page.click('[data-cy=desktop-logo]');
  await page.click('[data-cy=module-0-title-link]');
  await expect(page.locator(".locked_marker_1")).toBeVisible();
  await expect(page.locator(".unlocked_marker_1")).not.toBeVisible();
  await page.click(".unlocked_marker_0-inner");
  let teaser = await page.locator('[data-cy=activity-teaser-0]');
  await expect(teaser).toBeVisible({ timeout: 100000 });
  await expect(teaser).toContainText('activity 11');
  await teaser.click();
  await page.frameLocator('[data-cy=vimeo-iframe]').locator(".play").scrollIntoViewIfNeeded();
  await page.frameLocator('[data-cy=vimeo-iframe]').locator(".play").click();
  await page.locator('[data-test=quiz-question]').waitFor();
  await expect(page.locator('[data-test=quiz-question]')).toContainText('1+1=');
  await page.click('[data-cy=watch-image-video-button]');
  await page.click('[data-cy=back-to-quiz-button]');
  await page.click('[data-cy=input-value-0]');
  await page.click('[data-cy=check-answer-button]');
  await expect(page.locator('[data-cy=incorrect-feedback]')).toBeVisible();
  await page.click('[data-cy=input-value-1]');
  await page.click('[data-cy=check-answer-button]');
  await expect(page.locator('[data-cy=incorrect-feedback]')).not.toBeVisible();
  await expect(page.locator('[data-cy=correct-feedback]')).toBeVisible();
  await page.click('[data-cy=continue-button]');
  await page.click('[data-cy=too-easy]');
  teaser = await page.locator('[data-cy=activity-teaser-0]');
  await expect(teaser).toBeVisible({ timeout: 100000 });
  await expect(teaser).toContainText('activity 12');
  await teaser.click();
  await page.frameLocator('[data-cy=vimeo-iframe]').locator(".play").scrollIntoViewIfNeeded();
  await page.frameLocator('[data-cy=vimeo-iframe]').locator(".play").click();
  await expect(page.locator('[data-cy=too-easy]')).toBeVisible({ timeout: 100000 });
  await page.click('[data-cy=too-easy]');
  teaser = await page.locator('[data-cy=activity-teaser-0]');
  await expect(teaser).toBeVisible({ timeout: 100000 });
  await expect(teaser).toContainText('activity 13');
  await teaser.click();
  await page.frameLocator('[data-cy=vimeo-iframe]').locator(".play").scrollIntoViewIfNeeded();
  await page.frameLocator('[data-cy=vimeo-iframe]').locator(".play").click();
  await expect(page.locator('[data-cy=too-easy]')).toBeVisible({ timeout: 100000 });
  await page.click('[data-cy=too-easy]');
  await expect(page.locator('[data-cy=new-location-unlocked]')).toBeVisible({ timeout: 100000 });
  await page.click('[data-cy=back-to-course-button]');
  await expect(page.locator(".unlocked_marker_1")).toBeVisible();
  await expect(page.locator(".locked_marker_1")).not.toBeVisible();
  await page.locator(".unlocked_marker_1-inner").click();
  teaser = await page.locator('[data-cy=activity-teaser-0]');
  await expect(teaser).toBeVisible({ timeout: 100000 });
  await expect(teaser).toContainText('activity 21');
});