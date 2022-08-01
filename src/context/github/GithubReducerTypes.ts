// Interfaces
import { UserInterface } from '../../components/users/UserInterface';
import { ProfileInterface } from '../../components/users/UserInterface';

export type GithubDispatchCases =
    | { type: 'FETCH_USERS_START' }
    | { type: 'GET_USER_AND_REPOS'; payload: any }
    | { type: 'FETCH_USERS_SUCCESS'; payload: any }
    | { type: 'CLEAR_USERS' };

export interface GithubStateInterface {
    users: UserInterface[];
    user: ProfileInterface;
    repos: any[];
    loading: boolean;
}
