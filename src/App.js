import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import ParentComponent from './ParentComponent';



function Navbar() {
  return (<nav
  className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-black shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-red-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <div className="ml-2">
      <p className="text-xl text-white dark:text-slade-600"><a href="https://www.weather.JeffreyDinackus.com">Weather.JeffreyDinackus.com</a></p
      >
    </div>
  </div>
</nav>);}



function App() {
  return (
    <div className="App" >
      <Navbar ></Navbar>
      <div className='container'> 
        <ParentComponent></ParentComponent></div>
      
    </div>
  );
}

export default App;
