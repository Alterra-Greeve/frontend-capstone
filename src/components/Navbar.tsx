import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-2">
                <Link to={'/'}>
                    <li className="bg-black text-white rounded-md p-2">Dashboard</li>
                </Link>
                <Link to={'/users'}>
                    <li className="bg-black text-white rounded-md p-2">Users</li>
                </Link>
                <Link to={'/products'}>
                    <li className="bg-black text-white rounded-md p-2">Products</li>
                </Link>
                <Link to={'/challenges'}>
                    <li className="bg-black text-white rounded-md p-2">Challenges</li>
                </Link>
            </ul>
        </nav>
    )
};
