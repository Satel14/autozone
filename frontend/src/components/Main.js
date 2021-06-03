import React, { Component } from 'react'
import MainLogo from './svg/main.png'

import './css/Main.css'


export class Main extends Component {
    render() {
        return (
        <div id="welcome" className="section text-center">
            <main className="parallax-container parallax1" data-parallax-img={MainLogo}><div className="material-parallax parallax"><img src={MainLogo} alt=""></img></div>
            <div className="parallax-content">
                <div className="container">
                <div className="brand">
                    <img src="images/logo-white.png" alt="" className="img-responsive"></img>
                </div>
                <div className="section-title"><ya-tr-span data-index="171-0" data-translated="false" data-source-lang="en" data-target-lang="ru" data-value="Welcome to our website" data-translation="Добро пожаловать на наш сайт" data-type="trSpan">Welcome to our website</ya-tr-span></div>
                <div className="row ">
                    <div className="col-sm-12">
                    <h2 className="text-accent"><ya-tr-span data-index="172-0" data-translated="false" data-source-lang="en" data-target-lang="ru" data-value=" #1 PLACE FOR ALL YOUR AUTOMOTIVE NEEDS" data-translation=" #1 МЕСТО ДЛЯ ВСЕХ ВАШИХ АВТОМОБИЛЬНЫХ ПОТРЕБНОСТЕЙ" data-type="trSpan"> #1 PLACE FOR ALL YOUR AUTOMOTIVE NEEDS</ya-tr-span></h2>
                    <p className="text-block-center"><ya-tr-span data-index="173-0" data-translated="false" data-source-lang="en" data-target-lang="ru" data-value=" Autozone is a leading digital automotive marketplace designed to connect vehicle buyers and sellers. " data-translation=" Autozone-это ведущий цифровой автомобильный рынок, предназначенный для подключения покупателей и продавцов автомобилей. " data-type="trSpan"> Autozone is a leading digital automotive marketplace designed to connect  vehicle buyers and sellers. </ya-tr-span><ya-tr-span data-index="173-1" data-translated="false" data-source-lang="en" data-target-lang="ru" data-value="Our website lets you research and compare new, certified and used cars by searching for body type, mileage, price and numerous other criteria. " data-translation="Наш сайт позволяет вам исследовать и сравнивать новые, сертифицированные и подержанные автомобили, ища тип кузова, пробег, цену и множество других критериев. " data-type="trSpan">Our website lets you research and compare new, certified and used cars by  searching for body type, mileage, price and numerous other criteria. </ya-tr-span></p>
                    </div>
                </div>
                </div>
            </div>
            </main>
        </div>
        )
    }
}

export default Main
