import React, {useEffect, useState} from "react";
import {Route, NavLink} from "react-router-dom";


const Navbar = ({}) => {

    const [toggle, setToggle] = useState(false);





    const routes = [

      ,
        {
            path: "/AddProject",
            main: () => <h2 className='font-medium'>Add Project</h2>,
            exact: true,
            strict: true,
        },

        {
            path: "/",
            main: () => <h3 className='font-medium'>Projects</h3>,
            exact: true,
            strict: true,
        },

    ];

    function toggleMenu() {
        setToggle(!toggle);
    }

    return (
        <>
            <nav className="mx-auto mb-6  border-b-25  rounded-br-3xl rounded-bl-3xl flex items-center justify-between py-4  bg-primary rounded  border-primary">
                <div className="pb-1 flex flex-row items-center justify-center">
          <span className="md:hidden w-8 ml-2" onClick={() => toggleMenu()}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
              />
            </svg>
          </span>
                    <span
                        className="text-black-400 md:font-bold font-semibold text-3xl md:text-4xl ml-2 mb-1 sm:mb-0 tracking-wide">
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    children={<route.main/>}
                    exact={route.exact}
                    strict={route.strict}
                />
            ))}
          </span>
                </div>
                <div className="md:flex items-center justify-between mr-6 md:mr-32 hidden">
                    {

                        <div className="flex items-center justify-between w-full">


                            <NavLink
                                     className="mr-2 md:ml-16 font-semibold text-base md:text-lg hover:text-blue-400"
                                     activeClassName=" md:border-8 border-indigo-400   md:font-normal md:rounded-2xl  "
                                     to="/"
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                className="mr-2 md:ml-16 font-semibold text-base md:text-lg hover:text-blue-400"
                                activeClassName=" md:border-8 border-indigo-400  md:font-medium md:rounded-2xl   "
                                to="/AddProject"
                            >
                                Add-Project
                            </NavLink>


                        </div>
                     }
                </div>
            </nav>
            {toggle ? (
                <div className="inset-0 top-16 w-1/2 z-10 absolute bg-primary">

                        <div className="flex flex-col items-start justify-center leading-8 tracking-wide w-full">
                            <NavLink
                                     className="w-full mr-2 font-semibold text-base md:text-lg hover:text-blue-400 px-6 py-2"
                                     activeClassName="md:text-lg py-2 px-4 md:py-2 md:px-6 md:font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                     to="/"
                            >
                              Projects
                            </NavLink>

                            <NavLink
                                className="w-full mr-2 md:ml-16 font-semibold text-base md:text-lg hover:text-blue-400 px-6 py-2"
                                activeClassName="md:text-lg py-2 px-4 md:py-2 md:px-6 md:font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                to="/AddProject"
                            >
                                Add-Project
                            </NavLink>


                            <div className="md:mr-4 md:ml-16">

                            </div>
                        </div>

                </div>
            ) : (
                <div></div>
            )}
        </>
    );
};


export default Navbar;

