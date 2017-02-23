export const EMPTY_ARRAY = 'thereIsNothingInArraySoMaxMinWontWork';
export const PROPERTY_BINDING = (ngRedux,property, secondProperty, thirdProperty) =>{
  if (property && secondProperty && thirdProperty)
    return ngRedux.select(selector => selector[property][secondProperty][thirdProperty]);
  else if (property && secondProperty)
    return ngRedux.select(selector => selector[property][secondProperty]);
  else if (property)
    return ngRedux.select(selector => selector[property]);
  else  return ngRedux.select(selector => selector);
};
export const ELEPHANTS_URL = 'http://localhost:3000';
