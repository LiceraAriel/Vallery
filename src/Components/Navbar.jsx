import { NAVBAR_ROUTES } from "./Routes/Routes";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <ul className="navbar">
            {NAVBAR_ROUTES.map((route) => (
                <li className="lista" key={route.path}>
                <NavLink
                    to={route.path}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    {route.name}
                </NavLink>
                </li>
            ))}
            </ul>
        </nav>
)}

export default Navbar;