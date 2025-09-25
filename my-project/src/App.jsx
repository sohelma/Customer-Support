// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
 

  return (
    <>
    {/*---- navbar------------------ */}
      <div className="my-2">
        <div className="container">
              <div className="navbar bg-base-100 xl:pl-14 pr-0">
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
                    <li><button className="btn btn-primary"><i className="fa-solid fa-plus mr-2"></i>New Ticket</button></li>
                    
                    {/* <li className="btn btn-primary"><a><i className="fa-solid fa-plus "></i>New Ticket</a></li> */}
                  </ul>
                </div>
            </div>
        </div>
      </div>
      {/*------------- ticket--------------- */}
      <div className="bg-gray-300 ">
        <div className="container mx-auto xl:pl-14 xl:pr-0 sm:mx-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 text-center ">
              <div className="bg-[url('./assets/vector1.png')] w-full lg:w-[600px] h-52 bg-center 
              bg-cover bg-red-200 flex items-center justify-center">
                    <h1 className="text-white text-3xl p-4">In-Progress</h1>
              </div>
              <div className="bg-[url('./assets/vector2.png')] w-full lg:w-[600px] h-52 bg-center
               bg-cover bg-gradient-to-r from-[#54CF68]to-[#00827A] flex items-center justify-center">
                    <h1 className="text-white text-3xl p-4">Resolved</h1>
              </div>
          </div>
        </div>
      </div>
      {/* footer----------------------------- */}
      <div className="bg-black w-full sm:w-full ">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-gray-400 xl:pl-14 xl:pr-0  ">
           <div className="px-2 py-8">
                <h1 className="text-xl text-white mb-2">CS — Ticket System</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
           <div className="px-2 py-8">
            <h2 className="text-xl text-white mb-2">Company</h2>
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Saled</p>
           </div>
           <div className="px-2 py-8">
             <h2 className="text-xl text-white mb-2">Services</h2>
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
           </div>
            <div className="px-2 py-8">
             <h2 className="text-xl text-white mb-2">Information</h2>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
           </div>
           <div className="px-2 py-8">
             <h2 className="text-xl text-white mb-2">Social Links</h2>
             
             <p><span><i className="fa-brands fa-linkedin"></i></span>@CS — Ticket System</p> 
             
               <p><i className="fa-brands fa-linkedin mr-2"></i></p><span>@CS — Ticket System</span>
              <div className="flex items-center gap-2  p-4 rounded">
                <i className="fa-solid fa-envelope"></i>
                <span>@CS — Ticket System</span>
              </div>  
           </div>

        </div>

        <div className="text-center text-white mt-10 pb-6">© 2025 CS — Ticket System. All rights reserved.</div>
      </div>
      
    </>
  )
}

export default App
