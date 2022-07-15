G_REPEATING_SECTIONS.forEach((section) => {
  on(`change:repeating_${section} remove:repeating_${section}`, (eventInfo) => {
    isFieldsetEmpty(section);
  });
});

// Calculate derived stats
Object.keys(G_DERIVED_STATS).forEach((stat) => {
  on(`change:${stat}`, (eventInfo) => {
    const update = {};
    const value = +eventInfo.newValue || 0;

    G_DERIVED_STATS[stat].forEach((derived) => {
      update[derived.name] = derived.base + value;
    });

    setAttrs(update);
  });
});

// Update item slots carried
on(
  `change:repeating_inventory:item_slots change:repeating_inventory remove:repeating_inventory ` +
    `change:repeating_weapons:weapon_slots change:repeating_weapons remove:repeating_weapons`,
  (eventInfo) => calculateTotalSlots()
);
