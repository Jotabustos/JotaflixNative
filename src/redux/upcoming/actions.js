import * as types from "./types";
import * as api from "../../webservices";
import axios from "axios"

export const getMovies = () => dispatch => {
    dispatch(setMoviesLoading())
    api.fetchMoviesUpcoming()
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

export const getMoviesInPage = (page = 2) => dispatch => {
    dispatch(setMoviesLoading());
    api.fetchMoviesUpcoming(page)
        .then(res => dispatch({
            type: types.UPDATE_MOVIES_IN_PAGE,
            payload: {
                movies: res.data.results,
                page: res.data.page
            }
        }))
        .catch(err => dispatch({
            type: types.UPDATE_MOVIES_IN_PAGE,
            payload: {
                movies: [],
                page: page
            }
        }))
}

export const setSelectedMovie = (movie) => dispatch => {
    dispatch({
        type: types.SET_SELECTED_MOVIE,
        payload: movie
    })
}

const setMoviesLoading = () => {
    return {
        type: types.MOVIES_LOADING
    };
};