
const epiModelParamsInfo = require('./epi-model-params.json');


Object.entries(epiModelParamsInfo.groups).forEach(([key, groupObj]) => {
  groupObj.key = key;
  groupObj.params = [];
});

Object.entries(epiModelParamsInfo.params).forEach( ([key, paramObj]) => {
  if (paramObj.disabled) {
    return;
  }

  paramObj.key = key;
  paramObj.value = paramObj.default;
  paramObj.group = epiModelParamsInfo.groups[paramObj.param_group_key];

  paramObj.group.params.push(paramObj);
});

const groupsList = (() => {
  return [...Object.values(epiModelParamsInfo.groups)];
})();


const paramsModel = {
  groups: groupsList,
  get params() { return epiModelParamsInfo.params; },

  value(paramKey) {
    return epiModelParamsInfo.params[paramKey].value;
  }
};


export default paramsModel;

