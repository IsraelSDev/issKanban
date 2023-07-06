import {createFeatureSelector, createSelector} from "@ngrx/store";
import {sideBarType} from "./sidebar.reducers";

export const sidebarSelectors = createFeatureSelector<sideBarType>('sidebar');

export const getSideBarShow = createSelector(sidebarSelectors, (state: sideBarType) => state.show);
