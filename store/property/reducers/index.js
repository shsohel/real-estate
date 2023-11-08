/** @format */

import {
  BIND_PROPERTY_INFO,
  GET_ALL_PROPERTIES_BY_QUERY,
} from "../action-types";
import { propertyModel } from "../models";

const initialState = {
  allProperties: [],
  propertyInfo: propertyModel,
};

const propertyReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES_BY_QUERY:
      return {
        ...state,
        allProperties: action.allProperties,
      };
    case BIND_PROPERTY_INFO:
      return {
        ...state,
        propertyInfo: action.propertyInfo,
      };

    default:
      return state;
  }
};
export default propertyReducers;
