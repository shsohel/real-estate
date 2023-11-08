/** @format */

import { BIND_PROPERTY_INFO } from "../action-types";
import { propertyModel } from "../models";

export const bindPropertyBasic = (propertyInfo) => (dispatch) => {
  if (propertyInfo) {
    dispatch({
      type: BIND_PROPERTY_INFO,
      propertyInfo,
    });
  } else {
    dispatch({
      type: BIND_PROPERTY_INFO,
      propertyInfo: propertyModel,
    });
  }
};
