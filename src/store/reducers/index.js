import {
    ACTIONS_AUTHORIZATION_USER,
    ACTIONS_MESSAGE_ERROR,
    ACTIONS_ADD_COMMENT,
    ACTIONS_DELETE_COMMENT
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

        case ACTIONS_ADD_COMMENT: {
            const { filmId, userId, text } = payload;
            let max = 0;
            state.comments.map(item => {
                if(item.id > max) max = item.id;
            });
            let id = ++max;
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        id,
                        filmId,
                        userId,
                        text
                    }
                ]
            };
        }

        case ACTIONS_DELETE_COMMENT: {
            return {
                ...state,
                comments: state.comments.filter(item => item.id !== Number.parseInt(payload))
            };
        }

        default:
            return state;
    }
}