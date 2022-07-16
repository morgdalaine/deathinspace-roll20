const rollAbility = async (ability) => {
  const abilityName = getTranslationByKey(ability);
  const abilityWord = getTranslationByKey('ability');
  const roll = getTranslationByKey('roll');
  const rollType = getTranslationByKey('roll_type');
  const standard = getTranslationByKey('standard');
  const advantage = getTranslationByKey('advantage');
  const disadvantage = getTranslationByKey('disadvantage');
  const successOn = getTranslationByKey('success_on');

  const template = [
    `&{template:dis}`,
    `{{name=@{character_name}}}`,
    `{{header=${abilityName}}}`,
    `{{roll=[[?{${rollType}|${standard}, 1d20|${advantage}, 2d20kh1|${disadvantage}, 2d20kl1}+@{${ability}}]]}}`,
    `{{type=${abilityWord}}}`,
  ];

  const result = await startRoll(template.join(' '));
  const { rollId, results } = result;
  finishRoll(rollId, results);
};
