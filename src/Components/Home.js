import React from "react";
import './Home.css'
import Product from "./Product";

const Home = () => {
    return(
        
            <div className="home">
                <div className="home-container">
                    <img src="https://wallpaperaccess.com/full/6424671.jpg" className="home-img" alt=""></img>

                    <div className="home-row">
                        <Product
                            id = '123'
                            title = "SAMSUNG 28 L Convection & Grill Microwave Oven  (MC28A5013AK, Black)"
                            price = {11.96}
                            rating = {5}
                            image = "https://rukminim1.flixcart.com/image/832/832/l23mhzk0/microwave-new/2/x/h/ms23a301tak-samsung-23-original-imagdgmpy6pgsp6d.jpeg?q=70"
                        />
                        <Product
                            id = '1231'
                            title = "Fire-Boltt Ninja Bell Bluetooth Calling & AI Voice Assistance Smartwatch Smartwatch  (Pink Strap, Free Size)"
                            price = {9.96}
                            rating = {4}
                            image = "https://rukminim1.flixcart.com/image/832/832/kxxl9jk0/watch/9/8/x/1-hl-2022-new-trending-full-black-round-waterproof-gym-fitness-original-imaga9u8te7hghvz.jpeg?q=70"
                        />
                    </div>
                    <div className="home-row">
                        <Product
                            id = '1232'
                            title = "Butterfly Rapid Kettle 1.5 Litre + Eco 750 Ml Water Bottle"
                            price = {18.6}
                            rating = {5}
                            image = "https://rukminim1.flixcart.com/image/832/832/l1dwknk0/electric-kettle/1/l/l/-original-imagcyntuc6zchxu.jpeg?q=70"
                        />
                        <Product
                            id = '1233'
                            title = "MILTON Thermosteel Flip Lid 500 ml Flask  (Pack of 1, Silver, Steel)"
                            price = {20.96}
                            rating = {4}
                            image = "https://rukminim1.flixcart.com/image/832/832/knj7wcw0/bottle/v/4/7/1000-thermosteel-1-fg-tms-fis-0062-milton-original-imag276hgtk7scwj.jpeg?q=70"
                        />
                        <Product
                            id = '1234'
                            title = "Hindware Clarissa Blk 60 / Clarissa Blk 60 IN Wall Mounted Chimney  (Black 750 CMH)"
                            price = {29.96}
                            rating = {4}
                            image = "https://rukminim1.flixcart.com/image/832/832/xif0q/chimney/s/4/q/-original-imagh2g2ewgthxwg.jpeg?q=70"
                        />
                    </div>
                    <div className="home-row">
                        <Product
                            id = '1235'
                            title = "OnePlus Y1S 80 cm (32 inch) HD Ready LED Smart Android TV with Android 11 and Bezel-Less Frame  (32HD2A00)"
                            price = {29.96}
                            rating = {4}
                            image = "https://rukminim1.flixcart.com/image/832/832/kzfvzww0/television/e/b/b/32hd2a00-32-y1s-oneplus-original-imagbgcewfqywgk7.jpeg?q=70 "
                        />
                    </div>
                </div>
            </div>
    )
}

export default Home