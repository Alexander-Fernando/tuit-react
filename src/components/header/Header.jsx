import React from 'react'
import TwitterLogo from '../../assets/images/twitter-logo.png';
import './Header.scss'


export const Header = () => {
    return (
        <div className="header">
            <img src={TwitterLogo} alt="Logo de Twitter" />
            <h1>Tweets Simulator</h1>
        </div>
    )
}
