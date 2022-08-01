export interface UserInterface {
    avatar_url?: string;
    events_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    gravatar_id?: string;
    html_url?: string;
    id?: number;
    login?: string;
    node_id?: string;
    organizations_url?: string;
    received_events_url?: string;
    repos_url?: 'https://api.github.com/users/mojombo/repos';
    site_admin?: boolean;
    starred_url?: string;
    subscriptions_url?: string;
    type?: string;
    url?: string;
}

export interface ProfileInterface {
    name?: string;
    type?: string;
    avatar_url?: string;
    location?: string;
    bio?: string;
    blog?: string;
    twitter_username?: string;
    login?: string;
    html_url?: string;
    followers?: number;
    following?: number;
    public_repos?: number;
    public_gists?: number;
    hireable?: boolean;
}
