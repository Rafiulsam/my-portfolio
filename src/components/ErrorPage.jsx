import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

function ErrorPage() {
    const navigate =useNavigate()
    return (
        <div className={`bg-[url('/no-signal.gif')] bg-cover bg-center h-screen`}>
            <div className='bg-black bg-opacity-50 h-full flex flex-col items-center justify-center font-bold'>
                <h1 className='text-6xl text-white'>404</h1>
                <h2 className='text-2xl text-white'>Page Not Found</h2>
                <button onClick={()=>navigate(-1)} className='mt-4 px-6 py-3 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-lg flex items-center gap-3'><FaArrowLeft/> Go Back</button>

            </div>
        </div>
    );
}

export default ErrorPage;