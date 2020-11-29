import scenesActionTypes from "../types/scenes.types";
const INITIAL_STATE = {
  scenes: null,
  error: null,
};

export const scenesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case scenesActionTypes.FETCH_SCENES_SUCCESS:
      return {
        ...state,
        scenes: {
          ...state.scenes,
          [action.payload.section]: action.payload.data,
        },
        error: null,
      };
    case scenesActionTypes.FETCH_SCENES_FAILURE:
      return {
        ...state,
        scenes: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default scenesReducer;
