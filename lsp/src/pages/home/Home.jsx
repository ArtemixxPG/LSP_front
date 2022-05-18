import React from 'react';
import NavBar from "../../components/navbar/NavBar";
import SideBar from "../../components/sidebar/SideBar";


import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <SideBar/>
            <div className="homeContainer">
                <NavBar/>
                </div>
        </div>
    );
};

export default Home;