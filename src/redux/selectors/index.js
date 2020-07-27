import { get } from "lodash";

export const isSearchLoading = (state) => get(state, "search.isLoading");
