import "./home.css";
import React, { Component } from "react";
import Logo from "../../Components/1-Logo/Logo";
import Nav from "../../Components/2-Nav/Nav";
import VideoHome from "../../Components/3-VideoHome/VideoHome";
import DestacadosHome from "../../Components/4-DestacadosHome/DestacadosHome";

export default class Home extends Component {
    render(){
        return(
            <div className="Home">
                <div>
                    <Logo/>
                    <Nav/>
                    <VideoHome/>
                    <DestacadosHome/>
                </div>
            </div>
        )
    }
}