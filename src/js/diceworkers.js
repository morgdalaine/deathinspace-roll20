const makeRollString = (params) => {
  const { header, ability, category, damage } = params;

  console.log({ damage });

  const template = [
    `@{wtype}`,
    `&{template:dis}`,
    `{{name=@{character_name}}}`,
    `{{header=${header}}}`,
    `{{category=${category}}}`,
    `{{roll=[[@{rtype}+${ability}]]}}`,
  ];

  if (damage) {
    template.push(`{{damage=[[${damage}]]}}`);
  }

  return template.join(' ');
};

const makeRoll = async (rollString) => {
  const result = await startRoll(rollString);
  const { rollId, results } = result;
  finishRoll(rollId, results);
};

const rollAbility = async (ability) => {
  const [abilityName, abilityWord] = helpers.getTranslationByArray([ability, 'ability']);
  const abilityTag = `@{${ability}}[${abilityName}]`;

  const params = {
    header: abilityName,
    category: abilityWord,
    ability: abilityTag,
  };

  const rollString = makeRollString(params);
  makeRoll(rollString);
};

const rollWeapon = async (sectionId) => {
  const weaponType = `repeating_weapons_${sectionId}_weapon_type`;
  const weapoDamage = `repeating_weapons_${sectionId}_weapon_damage`;
  const request = [weaponType];
  getAttrs(request, (values) => {
    const ability = values[weaponType];
    const damage = values[weapoDamage];

    const [abilityName, abilityWord] = helpers.getTranslationByArray([ability, 'ability']);
    const abilityTag = `@{${ability}}[${abilityName}]`;

    const params = {
      header: abilityName,
      category: abilityWord,
      ability: abilityTag,
      damage: damage,
    };

    const rollString = makeRollString(params);
    makeRoll(rollString);
  });
};
