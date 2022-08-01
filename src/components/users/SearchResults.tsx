// Hooks
import { useContext } from 'react';

// Components
import Loading from '../shared/Loading';
import UserItem from '../users/UserItem';

// Context
import { GithubContext } from '../../context/github/GithubContext';

function SearchResults() {
    // Get Context Values
    const { users, loading } = useContext(GithubContext);

    if (!loading) {
        return (
            <>
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                    {users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
            </>
        );
    } else if (loading) {
        return <Loading />;
    } else {
        return <></>;
    }
}

export default SearchResults;
