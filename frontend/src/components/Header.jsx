import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export default function Header() {

    const dispatch = useDispatch();

    return (
        <nav className="bg-blue-600 col-span-full ">
            <div className="px-2 sm:px-6 lg:px-8  grid grid-cols-12">
                <div className="relative flex items-center justify-between h-16 col-span-10 col-start-2">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to="/">
                            <div className="flex-shrink-0 flex items-center text-white text-2xl font-bold cursor-pointer">mesera</div>
                        </Link>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/negocios" className="text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Negocios</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );

}

