import useAuth from "@/lib/hooks/useAuth";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAppDispatch } from "@/lib/redux";
import { signOut } from "@/lib/redux/api/auth";

const Authenticated = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(signOut());
  }
  return (
    <Button className="bg-black text-white rounded-md p-2" onClick={handleLogout}>
      Logout
    </Button>
  )
}

export default function Navbar() {
  const { session } = useAuth();

  return (
    <nav>
      <ul className="flex gap-2">
        <Link to="/dashboard">
          <li className="bg-black text-white rounded-md p-2">
            Dashboard
          </li>
        </Link>
        <Link to="/dashboard/users">
          <li className="bg-black text-white rounded-md p-2">
            Users
          </li>
        </Link>
        <Link to="/dashboard/products">
          <li className="bg-black text-white rounded-md p-2">
            Products
          </li>
        </Link>
        <Link to="/dashboard/challenges">
          <li className="bg-black text-white rounded-md p-2">
            Challenges
          </li>
        </Link>

        {session === "authenticated"
          ? <Authenticated />
          : <Link to="/auth/login">
            <li className="bg-black text-white rounded-md p-2">
              Login
            </li>
          </Link>
        }
      </ul>
    </nav>
  )
}
