import * as types from "./types";
import * as api from "../../webservices";

export const getMovies = (page = 1) => dispatch => {
    dispatch(setMoviesLoading())
    api.fetchMoviesUpcoming(page)
        .then(res => dispatch({
            type: types.GET_UPCOMING_MOVIES,
            payload: {
                movies: res.data.results,
                page: res.data.page
            }
        }))
        .catch(err => dispatch({
            type: types.GET_UPCOMING_MOVIES,
            payload: {
                movies: [],
                page: page
            }
        }))

};

const setMoviesLoading = () => {
    return {
        type: types.MOVIES_LOADING
    };
};