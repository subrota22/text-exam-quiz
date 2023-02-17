import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../../../CSS/Navbar.css";
const Navbar = () => {
    return (
        <>
            <section>
                <nav>
                    <div className="navHead">
                        <div>
                     <NavLink to="/" className="navText">Demo online test </NavLink>
    
                        </div>
                        <div>
                          <NavLink to="/">
                          <img src="favicon.ico" alt="logo" className='logo' />
                          </NavLink>
                        </div>
                    </div>


                </nav>

            </section>
        </>
    );
};

export default Navbar;