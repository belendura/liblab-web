import { createSelector } from "reselect";

const selectSiteScenes = (state) => state.siteScenes;

export const selectScenes = createSelector(
  [selectSiteScenes],
  (siteScenes) => siteScenes && siteScenes.scenes
);

export const selectScenesBySection = createSelector(
  [selectScenes, (_, section) => ({ section })],
  (scenes, { section }) => scenes && scenes[`${section}`]
);
