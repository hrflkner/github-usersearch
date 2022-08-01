// Hooks
import { useState, useContext } from 'react';

// Packages
import { toast } from 'react-hot-toast';

// Context
import { GithubContext } from '../../context/github/GithubContext';

// Actions
import { searchUsers } from '../../context/github/GithubActions';

function SearchUsers() {
    const [text, setText] = useState<string>('');
    const { users, dispatch } = useContext(GithubContext);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text === '') {
            toast.error('Please enter a search term...');
        } else {
            toast.success('Processing Search!');
            const users = await searchUsers(text);
            dispatch({
                type: 'FETCH_USERS_SUCCESS',
                payload: users,
                loading: false,
            });
            setText('');
        }
    };

    const clearSearchResults = () => {
        dispatch({
            type: 'CLEAR_USERS',
            payload: [],
            loading: false,
        });
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8">
            <div>
                <form
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                        handleSubmit(e)
                    }
                >
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full pr-40 bg-gray-200 input input-md text-black"
                                placeholder="Search for a user..."
                                value={text}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setText(e.target.value)}
                            />
                            <button className="absolute top-0 -right-2 rounded-l-none w-36 btn btn-md">
                                Go
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button
                        className="btn-ghost btn-lg"
                        onClick={() => clearSearchResults()}
                    >
                        Clear
                    </button>
                </div>
            )}
        </div>
    );
}

export default SearchUsers;
