import React from 'react';
import { Link } from 'react-router-dom';
import Yugioh from '../resource/Yugioh.png'

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-around bg-slate-100 w-screen">
                <div className="flex justify-center w-[50%]">
                    <Link to="/"><img className="h-24 w-32" src={Yugioh} alt="Yugioh" /></Link>
                </div>
                <div className="w-[50%]">
                    <ul className="flex items-center justify-evenly text-white font-black">
                        <li><Link to="/juego">El Juego</Link></li>
                        <li><Link to="/torneos">Torneos</Link></li>
                        <li><Link to="/cartas">Todas las Cartas</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;