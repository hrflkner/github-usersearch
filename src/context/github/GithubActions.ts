// Packages
import axios from 'axios';

// ENVIRONMENT VARIABLES
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

// GET USER DATA
export const searchUsers = async (text: string) => {
    const params = new URLSearchParams({
        q: text,
    });

    const response = await github.get(`/search/users?${params}`);
    return response.data.items;
};

// GET SINGLE USER'S PROFILE DATA & REPOS
export const getUserAndRepos = async (username: string | undefined) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${username}`),
        github.get(`/users/${username}/repos?sort=created_at`),
    ]);

    return { user: user.data, repos: repos.data };
};
