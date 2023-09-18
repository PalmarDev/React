import React from 'react';
import Konami from '../resource/Konami_logo.webp';

const Footer = () => {
    return (
        <>
            <footer className="flex items-center justify-center w-screen h-24">
                <img className="h-14 w-36" src={Konami} alt="Konami" />
            </footer>
        </>
    )
}
export default Footer;

