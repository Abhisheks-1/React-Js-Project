import React, { useState } from "react";
import  '../../components/navbar.css';
import { BsCart3,BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill, } from "react-icons/bs";


import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";


const Home = () => {
  return (
   <><Navbar /><div className="image">
      <div className="image1">
        <img src="/images/5.jpg"></img>
      </div>

      <img src="/images/5.jpg"></img>
      <BsFillArrowLeftCircleFill className="left" />
      <BsFillArrowRightCircleFill className="right" />


    </div><div className="images">
        <span> <img src="/images/6.png"></img> </span>
      </div><div className="gallery">
        <div className="slider">
          <div className="card">
            <img src="/images/7.jpg"></img>
          </div>
          <div className="card">
            <img src="/images/7.webp"></img>
          </div>
          <div className="card">
            <img src="/images/8.webp"></img>
          </div>
          <div className="card">
            <img src="/images/9.webp"></img>
          </div>
          <div className="card">
            <img src="/images/10.webp"></img>
          </div>
          <div className="card">
            <img src="/images/11.webp"></img>
          </div>
          <div className="card">
            <img src="/images/12.webp"></img>
          </div>
        </div>
      </div><div className="images">
        <span> <img src="/images/women.png"></img> </span>
      </div><div className="gallery">
        <div className="slider">
          <div className="card">
            <img src="/images/13.webp"></img>
          </div>
          <div className="card">
            <img src="/images/14.webp"></img>
          </div>
          <div className="card">
            <img src="/images/15.webp"></img>
          </div>
          <div className="card">
            <img src="/images/16.webp"></img>
          </div>
          <div className="card">
            <img src="/images/17.webp"></img>
          </div>
          <div className="card">
            <img src="/images/18.webp"></img>
          </div>
          <div className="card">
            <img src="/images/19.webp"></img>
          </div>
        </div>
      </div><div className="images">
        <span> <img src="/images/6.png"></img> </span>
      </div><div className="gallery">
        <div className="slider">
          <div className="card">
            <img src="/images/7.jpg"></img>
          </div>
          <div className="card">
            <img src="/images/7.webp"></img>
          </div>
          <div className="card">
            <img src="/images/8.webp"></img>
          </div>
          <div className="card">
            <img src="/images/9.webp"></img>
          </div>
          <div className="card">
            <img src="/images/10.webp"></img>
          </div>
          <div className="card">
            <img src="/images/11.webp"></img>
          </div>
          <div className="card">
            <img src="/images/12.webp"></img>
          </div>
        </div>
      </div><div className="images">
        <span> <img src="/images/6.png"></img> </span>
      </div><div className="gallery">
        <div className="slider">
          <div className="card">
            <img src="/images/7.jpg"></img>
          </div>
          <div className="card">
            <img src="/images/7.webp"></img>
          </div>
          <div className="card">
            <img src="/images/8.webp"></img>
          </div>
          <div className="card">
            <img src="/images/9.webp"></img>
          </div>
          <div className="card">
            <img src="/images/10.webp"></img>
          </div>
          <div className="card">
            <img src="/images/11.webp"></img>
          </div>
          <div className="card">
            <img src="/images/12.webp"></img>
          </div>
        </div>
      </div>
      <Footer/></>
      



    
  )
}

export default Home   