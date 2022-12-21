import {
    POST_ACTION_SUCCESS,
    POST_ACTION_FAIL,
    SET_MESSAGE
} from "./types"

import postService from "../../services/post";

export const createPost = data => dispatch => {
    return postService.create(data).then(
        response => {
            dispatch({
                type: POST_ACTION_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message
            });

            return Promise.resolve();
        },
        error => {
            const message = error.response.data.message;

            dispatch({
                type: POST_ACTION_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        },
    );
};