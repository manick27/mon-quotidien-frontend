import React from 'react';
import 'tailwindcss/tailwind.css';
import { BsTelephone } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillBrightnessHighFill } from "react-icons/bs";

window.addEventListener('load', () => {
    const savedMode = localStorage.getItem('mode');
    if(savedMode){
        changeMode(savedMode);
    }
  });

function handleClick(mode) {
    // const savedMode = localStorage.getItem('mode');
    if(mode == 'dark-mode'){
        changeMode('light-mode');
    }else{
        changeMode('dark-mode');
    }
    console.log(mode)
  }

  function changeMode(mode){
    var html = document.querySelector('html');
    var sun1 = document.querySelector('#sun1');
    if(mode == 'dark-mode'){
        html.setAttribute("class", "dark");
        sun1.setAttribute("class", "text-yellow-600 text-3xl");
        localStorage.setItem('mode', 'dark-mode');
    }else{
        html.setAttribute("class", "");
        sun1.setAttribute("class", "hidden");
        localStorage.setItem('mode', 'light-mode');
    }
}

function Header() {
  return (
    <div className="container mx-auto dark:bg-gray-800 text-gray-300">
    <div className="bg-green-800 px-14">
        <div className='flex'>
            <BsTelephone className='mt-1'/>
            <div>+237 690 868 185</div>
        </div>
    </div>
      <div className="flex items-center justify-between py-4 px-14">
        <h1 className="text-2xl font-bold text-green-800 dark:text-green-800">Mon Quotidien</h1>
        <nav className="flex space-x-4">
          <a href="/" className="text-gray-700 hover:text-black">Accueil</a>
          <a href="/about" className="text-gray-700 hover:text-black">À propos</a>
          <a href="/contact" className="text-gray-700 hover:text-black">Contact</a>
        </nav>
      </div>
      <div>
        <button onClick={() => handleClick('light-mode')} className="text-gray-500 text-2xl dark:hidden"><BsFillMoonFill /></button>
        <button id="sun1" onClick={() => handleClick('dark-mode')} className="text-yellow-600 text-3xl hidden"><BsFillBrightnessHighFill /></button>
      </div>
    </div>
  );
}

export default Header;