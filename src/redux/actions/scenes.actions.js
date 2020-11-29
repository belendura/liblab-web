import scenesActionTypes from "../types/scenes.types";

export const fetchScenesStart = (section) => ({
  type: scenesActionTypes.FETCH_SCENES_START,
  payload: section,
});

export const fetchScenesSuccess = ({ section, data }) => ({
  type: scenesActionTypes.FETCH_SCENES_SUCCESS,
  payload: { section, data },
});

export const fetchScenesFailure = (error) => ({
  type: scenesActionTypes.FETCH_SCENES_FAILURE,
  payload: error,
});
