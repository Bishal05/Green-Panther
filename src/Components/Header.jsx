import React from 'react'

function Header() {
    return (
        <div>
            <section id="header">
                <div className="header container">
                    <div className="nav-bar">
                        <div className="brand">
                            <a href="#hero">
                            <h1><span>Green</span>  Panther</h1>
                            </a>
                        </div>
                        <div className="nav-list">
                            <div className="hamburger">
                            <div className="bar"></div>
                            </div>
                            <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#services" >Services</a></li>
                            <li><a href=" " >Start Tracking</a></li>
                            <li><a href=" " >My Profile</a></li>
                            <li><a href=" " >LeaderBoard</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
