//Packages
import { Link } from 'react-router-dom';

//Components
import { UserInterface } from './UserInterface';

function UserItem({ user: { login, avatar_url } }: { user: UserInterface }) {
    return (
        <div className="card shadow-lg compact side bg-base-100 px-5 py-2">
            <div>
                <div className="avatar">
                    <div className=" mask mask-squircle shadow w-14 h-14">
                        <img src={avatar_url} alt={login} />
                    </div>
                </div>
            </div>
            <div>
                <h2 className="card-title">{login}</h2>
                <Link
                    className="text-base-content text-opacity-40"
                    to={`/users/${login}`}
                >
                    View Profile
                </Link>
            </div>
        </div>
    );
}

export default UserItem;
