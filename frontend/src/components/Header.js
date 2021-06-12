import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import './css/Header.css'
import {DataContext} from './Context'
import { Link as Link1 } from 'react-scroll';
import { Link as Link2 } from 'react-router-dom';

export class Header extends Component {
    
    static contextType = DataContext;
    

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link2 to="/shopping-cart-react"> <img src="http://livedemo00.template-help.com/wt_prod-14633/images/logo.png" alt="" /></Link2>
                   
                    </h1>
                </div>
                <nav>
                    
                    <ul className={toggle ? "toggle" : ""}>
                        <li><Link1 to="welcome" smooth={true} duration={2000}>Home</Link1></li>
                        <li><Link2 to="/product">Product</Link2></li>
                        <li><Link1 to="best" smooth={true} duration={2000}>Catalog</Link1></li>
                        <li><Link1 to="foot" smooth={true} duration={2000}>About</Link1></li>
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link2 to="/cart">
                            <img src={CartIcon} alt="" width="20"/>
                        </Link2>
                    </div>
                </nav>
            </header>
        )
    }
}



export default Header
