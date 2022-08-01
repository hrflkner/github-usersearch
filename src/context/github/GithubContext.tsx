// Packages
import React, { useReducer, createContext } from 'react';

//Interfaces
import { UserInterface } from '../../components/users/UserInterface';
import { ProfileInterface } from '../../components/users/UserInterface';

import githubReducer from './GithubReducer';

interface GithubContextInterface {
    users: UserInterface[];
    user: ProfileInterface;
    repos: any;
    loading: boolean;
    dispatch: any;
}

const GithubContextDefault = {
    users: [],
    user: {} as ProfileInterface,
    repos: [],
    loading: false,
    dispatch: () => {},
};

export const GithubContext =
    createContext<GithubContextInterface>(GithubContextDefault);

export const GithubContextProvider = ({
    children,
}: {
    children?: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(githubReducer, GithubContextDefault);

    return (
        <GithubContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};
