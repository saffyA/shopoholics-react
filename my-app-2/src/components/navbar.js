import React, {Component} from 'react';

const NavBar = ({ totalCounters }) => {
    return (<nav className="navbar navbar-light bg-light" style={{ alignSelf: "center" }}>
        <h1 style={{ fontStyle: "italic", fontSize: 80}}>
            Shopoholics
        </h1>
        <h3 style={{ fontFamily: "Comic Sans MS" }}>
            Shop till you drop!
        </h3>
        </nav>);
};

export default NavBar;