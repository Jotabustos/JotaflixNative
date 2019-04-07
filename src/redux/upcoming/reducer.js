import * as types from "./types";

const initialState = {
  movies: [],
  page: 1,
  isLoading: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_UPCOMING_MOVIES:
      return {
        ...state,
        movies: action.payload.movies,
        page: action.payload.page,
        isLoading: false
      };
    case types.MOVIES_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case types.UPDATE_MOVIES_IN_PAGE:
      return {
        ...state,
        isLoading: false,
        movies: [...state.movies, ...action.payload.movies],
        page: action.payload.page
      };
    case types.SET_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      };

    default:
      return state;
  }
}
