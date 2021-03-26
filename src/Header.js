import React from 'react'
import logo from "./images/amazon_logo.png"
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">
            {/* logo in the left -> img */}
            <Link to="/">
                <img className="header_logo" src={logo} alt="logo" />
            </Link>

            {/* searchbox */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/* links */}
            <div className="header_nav">
                {/* 1st link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello ajay</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/* shoping basket */}
                        <ShoppingBasketIcon />
                        {/* number of items in basket */}
                        <span className="header_optionLineTwo header_basketCount">0</span>
                    </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header
