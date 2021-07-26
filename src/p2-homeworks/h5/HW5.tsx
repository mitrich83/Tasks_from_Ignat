import React, {useState} from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from 'react-router-dom';


function HW5() {


    let div = <div className="App">

        <HashRouter>

            <Header/>

            <Routes/>

        </HashRouter>
    </div>;
    return div
}

export default HW5


