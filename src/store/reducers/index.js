import {
    ACTIONS_AUTHORIZATION_USER,
    ACTIONS_MESSAGE_ERROR,
    ACTIONS_ADD_COMMENT,
    ACTIONS_DELETE_COMMENT,
    ACTIONS_REDIRECT_TO_SEARCH,
    ACTIONS_ADD_SEARCH_STR,
    ACTIONS_EDIT_NAME_USER
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

        case ACTIONS_REDIRECT_TO_SEARCH: {
            return {
                ...state,
                redirect: payload
            };
        }

        case ACTIONS_ADD_SEARCH_STR: {
            return {
                ...state,
                searchStr: payload
            };
        }

        case ACTIONS_EDIT_NAME_USER: {
            const newUsers = state.users;
            newUsers.map(item => {
                if(item.id === state.currentUser) {
                    item.name = payload;
                }
            })
            return {
                ...state,
                users: newUsers
            };
        }

        default:
            return state;
    }
}