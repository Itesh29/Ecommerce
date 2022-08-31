import React from "react";
import './Home.css'
import Product from "./Product";

const Home = () => {
    return(
        
            <div className="home">
                <div className="home-container">
                    <img src="https://wallpaperaccess.com/full/6424671.jpg" className="home-img" alt="#"></img>

                    <div className="home-row">
                        <Product/>
                        <Product/>
                    </div>
                    <div className="home-row">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <div className="home-row">
                        <Product/>
                    </div>
                </div>
            </div>
    )
}

export default Home