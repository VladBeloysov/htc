import {
    ACTIONS_AUTHORIZATION_USER,
    ACTIONS_MESSAGE_ERROR
} from '../../constants/actions';

export default function (state = {}, { type, payload }) {
    switch (type) {
        case ACTIONS_AUTHORIZATION_USER: {
            return {
                ...state,
                currentUser: payload
            };
        }

        case ACTIONS_MESSAGE_ERROR: {
            return {
                ...state,
                messageError: payload
            };
        }

        default:
            return state;
    }
}