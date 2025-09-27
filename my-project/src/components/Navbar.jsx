import React from 'react';

const Navbar = () => {
    return (
        <div>
             <div className="my-2">
        <div className="container mx-auto px-4">
              <div className="navbar bg-base-100">
                <div className="flex-1">
                  <a className="btn btn-ghost text-xl">CS — Ticket System</a>
                </div>
                <div className="flex-none hidden md:flex ">
                  <ul className="menu menu-horizontal px-1 gap-2">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                    <li>
                      <button className="flex items-center px-4 py-2 rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white">
                        <i className="fa-solid fa-plus mr-2"></i>New Ticket
                      </button>
                    </li>
                    
                    {/* <li className="btn btn-primary"><a><i className="fa-solid fa-plus "></i>New Ticket</a></li> */}
                  </ul>
                </div>
            </div>
        </div>
      </div>
        </div>
    );
};

export default Navbar;