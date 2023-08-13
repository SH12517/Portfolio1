import React from 'react'
import logo from '../images/logo.png'



function Nav() {
  let nav = document.querySelector(".navbar");
  window.onscroll = function(){
    if(document.documentElement.scrollTop>20){
      nav.classList.add('header-scrolled');
    } else {
      nav.classList.remove('header-scrolled');
    }
  }
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector('.navbar-collapse.collapse');
  navBar.forEach(function(a){
    a.addEventListener("onClick", function(){
      navCollapse.classList.remove("show");
    })
  })

  return (
    <header className='header_wrapper'>
    <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
    <img src={logo} className='img-fluid'/>
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" 
      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className='fa fa-stream navbar-toggler-icon' />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav  menu-navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#Services'>Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#Services'>Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#Contact'>Contact</a>
            <li className="nav-item mt-3 mt-lg-0">
            <a className="main-btn " href='#Services'>Hire me</a>
          </li>
          </li>
        </ul>
       
      </div>
    </div>
  </nav> 
  </header>
 )
}
export default Nav