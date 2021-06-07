import React, { Component } from 'react'
import './css/elegant-icons.css'
import './css/Footer.css'


export class Last extends Component {
    render() {
        return (
            <footer className="section novi-background bg-cover">

    <div className="container">
      <div className="row-flex">

        <div className="right-block">
          <div className="social-footer">
            <ul className="social-footer-list">
              <li>
                <a href="#">
                  <span aria-hidden="true" className="ei social_facebook_square novi-icon"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span aria-hidden="true" className="ei social_twitter_square novi-icon"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span aria-hidden="true" className="ei social_pinterest_square novi-icon"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span aria-hidden="true" className="ei social_googleplus_square novi-icon"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span aria-hidden="true" className="ei social_youtube_square novi-icon"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span aria-hidden="true" className="ei social_skype_square novi-icon"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <ul className="footer-menu-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="left-block">
          <div className="footer-logo">
            <a href="index.html" className="logo2">
              <img src="http://livedemo00.template-help.com/wt_prod-14633/images/logo-white.png" alt="" className="img-responsive"></img> </a>
          </div>
          <div><span>©&nbsp; </span><span className="copyright-year">2021</span><span>&nbsp;</span><span>Autozone</span><span>.&nbsp;</span></div>
        </div>
      </div>

    </div>

  </footer>
        )
    }
}

export default Last