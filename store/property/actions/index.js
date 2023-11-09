/** @format */

import axios from "axios";
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
export const postPoperies = (propertyInfo) => (dispatch) => {
  const apiEndpoint = `/api/property/create`;
  axios
    .post(apiEndpoint, propertyInfo)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {});
};
