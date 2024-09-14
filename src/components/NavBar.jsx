import CTAButton from "./CTAButton"
import { Link } from 'react-router-dom';
import LoginModal from "./LoginModal";
import OTPModal from "./OTPModal";
import { useState } from "react";
import ChangePasswordModal from "./ChangePasswordModal";

const NavBar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const access_token = localStorage.getItem('access_token');

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        window.location.reload();
    }

    let loginModalID = 'loginModal'
    let fogetPassModalID = 'forgetPassModal'
    let changePasswordModalID = 'changePasswordModal'

    const [loginData, setLoginData] = useState({})

    return (
        <>
            <div className="navbar bg-gray-800 sticky top-0 left-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-warning">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link>Home</Link></li>
                            {user?.role === "ParkingOwner" ? (
                                <>
                                    <li><Link to={"/Dashboard"}>Dashboard</Link></li>
                                    {/* <li>
                                    <details>
                                        <summary>Booking</summary>
                                        <ul className="p-2">
                                            <li><Link>Submenu_1</Link></li>
                                            <li><Link>Submenu_2</Link></li>
                                        </ul>
                                    </details>
                                </li> */}
                                </>
                            ) : ""}
                            <li><Link>About Us</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl text-warning">Parking Palace</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        {user?.role === "ParkingOwner" ? (
                            <>
                                <li><Link to={"/Dashboard"}>Dashboard</Link></li>
                                {/* <li>
                                    <details>
                                        <summary>Booking</summary>
                                        <ul className="p-2">
                                            <li><Link>Submenu_1</Link></li>
                                            <li><Link>Submenu_2</Link></li>
                                        </ul>
                                    </details>
                                </li> */}
                            </>
                        ) : ""}
                        <li><Link>About Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {access_token ? (
                        <>
                            <CTAButton onClick={handleLogout}>Logout</CTAButton>
                        </>
                    ) : (
                        <>
                            <CTAButton onClick={() => document.getElementById(loginModalID).showModal()}>Login</CTAButton>
                            <CTAButton to="/SignUpMain">Sign Up</CTAButton>
                        </>
                    )}

                </div>
            </div>
            <LoginModal loginModalID={loginModalID} fogetPassModalID={fogetPassModalID} setLoginData={setLoginData} />
            <OTPModal fogetPassModalID={fogetPassModalID} changePasswordModalID={changePasswordModalID} loginData={loginData} />
            <ChangePasswordModal changePasswordModalID={changePasswordModalID} loginData={loginData} />
        </>
    )
}

export default NavBar