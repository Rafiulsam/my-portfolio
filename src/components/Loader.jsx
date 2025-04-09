import React from 'react';
import { useLocation } from 'react-router-dom';

const Loader = () => {
    const location = useLocation();

    // Define a base style and conditionally change the background based on the route
    const backGroundColor = location.pathname === "/" 
        ? "bg-[#b61924] text-white "
        : "bg-white text-red-700 "; 
    return (
        <div className={`${backGroundColor} dark:bg-[#0D0D0D] h-screen flex flex-col items-center justify-center`}> 
            <div className=' animate-ping text-6xl font-bold'><i>Loading</i></div> 
        </div>
    );
};

export default Loader;