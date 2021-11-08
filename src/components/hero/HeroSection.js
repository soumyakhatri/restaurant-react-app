import React from 'react'
import Decoration from '../../images/Decoration.png'


function HeroSection() {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <div className="heading d-flex flex-column justify-content-lg-center">
                    <div className="d-none d-sm-block">
                        <h1 className="ff-y">the right ingredients <br></br> for the right food</h1>
                    </div>
                    <div className="d-block d-sm-none">
                        <h1 className="ff-y">the right <br></br> ingredients for <br></br>the right food</h1>
                    </div>

                    <img className="heading-img pt-3" src={Decoration} alt="" />
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-center mt-4 heading-btns-div ff-l">
                    <a className="btn-t pt-3 semi-transparent-button stb-black mx-3" type="button" href="#reservation">BOOK A TABLE</a>
                    <a className="btn-t pt-3 semi-transparent-button btn-t-white mx-3 stb-white mt-4 mt-sm-0" type="button" href="#menu">SEE THE MENU</a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
