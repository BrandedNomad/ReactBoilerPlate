import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth'


const Header = ({startLogout}) =>{
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/dashboard">
                        <h1>Boilerplate React App</h1>
                    </Link>
                    <button className="page-header__button page-header__button--link" onClick={startLogout}>Logout</button>
                </div>

            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogout:()=> dispatch(startLogout())
    }
}


export default connect(undefined,mapDispatchToProps)(Header)