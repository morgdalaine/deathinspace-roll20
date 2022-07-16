const G_ABILITIES = ['body', 'dexterity', 'savvy', 'tech'];

const G_REPEATING_SECTIONS = ['inventory', 'small-items', 'weapons', 'armor', 'notes'];

const G_INVENTORY_REPEATING = [
  { section: 'repeating_inventory', fields: ['item_slots', 'item_count'] },
  { section: 'repeating_weapons', fields: ['weapon_slots'] },
];

const G_DERIVED_STATS = {
  body: [{ name: 'carry_max', base: 12 }],
  dex: [{ name: 'unarmored', base: 12 }],
};
