/**
 * Roll Abilities
 */
G_ABILITIES.forEach((ability) => {
  on(`clicked:${ability}`, async (eventInfo) => {
    rollAbility(ability);
  });
});

on(`clicked:repeating_weapons:attack`, async (eventInfo) => {
  console.dir(eventInfo);
  const sectionId = helpers.getSectionId(eventInfo.sourceAttribute);
  rollWeapon(sectionId);
});
