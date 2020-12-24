import {
    ACTIONS_AUTHORIZATION_USER,
    ACTIONS_MESSAGE_ERROR
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