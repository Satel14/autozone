import React, { Component } from 'react'
import './css/Footer.css'


export class Footer extends Component {
    render() {
        return (
<div className="section pre-footer novi-background bg-cover">
    <div className="container">

      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="footer-title">
            <span>LATEST NEWS</span>
          </div>

          <div className="news-minimal">
            <p className="news-minimal-text">The 2019 RDX Will Be the Sportiest Lexus Crossover Ever Built</p>
            <div className="news-minimal-link">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="news-minimal">
            <p className="news-minimal-text">Chevrolet is Discontinuing Corvettes for the Next Model Year</p>
            <div className="news-minimal-link">
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="news-minimal">
            <p className="news-minimal-text">Infiniti Reveals the Completely Redone 2019 QX50 for the US and Europe</p>
            <div className="news-minimal-link">
              <a href="#">Read More</a>
            </div>
          </div>

        </div>
        <div className="col-sm-6 col-md-3">
          <div className="footer-title">
            <span>LATEST Cars</span>
          </div>
          <div className="footer-product">
            <figure className="footer-product-img">
              <a href="#">
                <img src="http://livedemo00.template-help.com/wt_prod-14633/images/footer-1-80x65.jpg" alt="" className="img-responsive"></img>
              </a>

            </figure>
            <div className="caption">
              <p className="title"><a href="#"> LAMBORGHINI Aventador</a></p>
              <div className="product-info">35,000 KM</div>
              <div className="product-link">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="footer-product">
            <figure className="footer-product-img">
              <a href="#">
                <img src="http://livedemo00.template-help.com/wt_prod-14633/images/footer-2-80x65.jpg" alt="" className="img-responsive"></img>
              </a>

            </figure>
            <div className="caption">
              <p className="title"><a href="#"> BUGATTI CHIRON</a></p>
              <div className="product-info">35,000 KM</div>
              <div className="product-link">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="footer-product">
            <figure className="footer-product-img">
              <a href="#">
                <img src="http://livedemo00.template-help.com/wt_prod-14633/images/footer-3-80x65.jpg" alt="" className="img-responsive"></img>
              </a>

            </figure>
            <div className="caption">
              <p className="title"><a href="#"> FERRARI TESTAROSA</a></p>
              <div className="product-info">35,000 KM</div>
              <div className="product-link">
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-md-3">
          <div className="footer-title">
            <span>CONTACT US</span>
          </div>
          <address>
            <span aria-hidden="true" className="fa fa-map-marker novi-icon"></span>
            <a href="#">202 W 7th St, Suite 233 Los Angeles, California 90014 USA </a></address>
          <div className="footer-info">
            <div className="info-phone">
              <span aria-hidden="true" className="fa fa-phone novi-icon"></span>
              Phone: <a href="tel:#"> 1-800- 624-5462</a></div>
            <div className="info-fax">
              <span aria-hidden="true" className="fa fa-fax novi-icon"></span>FAX:
              <a href="tel:#">1-800- 624-5462</a></div>
            <div className="info-email">
              <span aria-hidden="true" className="fa fa-envelope novi-icon"></span>Email:
              <a href="mailto:#" tabIndex="-1">info@demolink.org</a>
            </div>

          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="footer-title">
            <span>Gallery</span>
          </div>
          <article className="gallery" data-lightgallery="group">
            <div className="row row-10 row-narrow">
              <div className="col-xs-4" data-instafeed-item="">
                <a className="thumbnail-creative" data-lightgallery="item" href="images/gallery-01-original.jpg">
                  <img src="http://livedemo00.template-help.com/wt_prod-14633/images/gallery-01-original.jpg" alt=""/>
                <div className="thumbnail-creative-overlay"></div>
              </a>
              </div>
              <div className="col-xs-4" data-instafeed-item="">
                <a className="thumbnail-creative" data-lightgallery="item" href="images/gallery-02-original.jpg">
                  <img src="http://livedemo00.template-help.com/wt_prod-14633/images/gallery-02-original.jpg" alt=""/>
                <div className="thumbnail-creative-overlay"></div>
              </a>
              </div>
              <div className="col-xs-4" data-instafeed-item="">
                <a className="thumbnail-creative" data-lightgallery="item" href="images/gallery-03-original.jpg">
                  <img src="http://livedemo00.template-help.com/wt_prod-14633/images/gallery-03-original.jpg" alt=""/>
                <div className="thumbnail-creative-overlay"></div>
              </a>
              </div>
              <div className="col-xs-4" data-instafeed-item="">
                <a className="thumbnail-creative" data-lightgallery="item" href="images/gallery-04-original.jpg">
                  <img src="http://livedemo00.template-help.com/wt_prod-14633/images/gallery-04-original.jpg" alt=""/>
                <div className="thumbnail-creative-overlay"></div>
              </a>
              </div>
              <div className="col-xs-4" data-instafeed-item="">
                <a className="thumbnail-creative" data-lightgallery="item" href="images/gallery-05-original.jpg">
                  <img src="http://livedemo00.template-help.com/wt_prod-14633/images/gallery-05-original.jpg" alt=""/>
                <div className="thumbnail-creative-overlay"></div>
              </a>
              </div>
              <div className="col-xs-4" data-instafeed-item="">
                <a className="thumbnail-creative" data-lightgallery="item" href="images/gallery-06-original.jpg">
                  <img src="http://livedemo00.template-help.com/wt_prod-14633/images/gallery-06-original.jpg" alt=""/>
                <div className="thumbnail-creative-overlay"></div>
              </a>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>
  </div>
         )
    }
}

export default Footer
