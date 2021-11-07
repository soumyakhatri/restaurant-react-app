import React from 'react'

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

                    <img className="heading-img pt-3" src="images/Decoration.png" alt="" />
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-center mt-4 heading-btns-div ff-l">
                    <button className="btn-t  semi-transparent-button stb-black mx-3" type="button">BOOK A TABLE</button>
                    <button className="btn-t btn-t-white mx-3 stb-white mt-4 mt-sm-0" type="button">SEE THE MENU</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
