import {
    ACTIONS_AUTHORIZATION_USER,
    ACTIONS_MESSAGE_ERROR,
    ACTIONS_ADD_COMMENT,
    ACTIONS_DELETE_COMMENT,
    ACTIONS_REDIRECT_TO_SEARCH,
    ACTIONS_ADD_SEARCH_STR
} from '../../constants/actions';

export function authorizationUser(id) {
    return {
        type: ACTIONS_AUTHORIZATION_USER,
        payload: id
    }
}

export function addMessageError(message) {
    return {
        type: ACTIONS_MESSAGE_ERROR,
        payload: message
    }
}

export function addComment(filmId, userId, text) {
    return {
        type: ACTIONS_ADD_COMMENT,
        payload: {
            filmId, userId, text
        }
    }
}

export function deleteComment(id) {
    return {
        type: ACTIONS_DELETE_COMMENT,
        payload: id
    }
}

export function redirectToSearch(flag) {
    return {
        type: ACTIONS_REDIRECT_TO_SEARCH,
        payload: flag
    }
}

export function addSearchStr(str) {
    return {
        type: ACTIONS_ADD_SEARCH_STR,
        payload: str
    }
}