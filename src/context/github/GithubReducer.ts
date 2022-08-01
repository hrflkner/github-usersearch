// Interfaces
import { GithubStateInterface } from './GithubReducerTypes';
import { GithubDispatchCases } from './GithubReducerTypes';

function githubReducer(
    state: GithubStateInterface,
    action: GithubDispatchCases
) {
    switch (action.type) {
        case 'FETCH_USERS_START':
            return {
                ...state,
                loading: true,
            };
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false,
            };
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            };
        default:
            return state;
    }
}
export default githubReducer;
