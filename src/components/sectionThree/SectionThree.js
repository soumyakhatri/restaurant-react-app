import React from 'react'
import decoration from '../../images/Decoration.png'


function SectionThree() {
    return (
        <div>
            <div className="section-3 d-flex align-items-center">
                <div className=" container">
                    <div className="row ">
                        <div className="col-xl-6">

                        </div>
                        <div className="col-xl-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                            <div className="transparent-div d-flex flex-column align-items-center align-self-center">
                                <h3 className="ff-y fs-36 fs-sm-26 text-center">Fine Ingredients</h3>
                                <img className="mt-2" src={decoration} alt="decoration" />
                                <p className="text-center ff-l mt-4 fw-light">If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes, muffins, and
              gourmet coffees make us hard to resist! Stop in today and check us out!</p>
                                <div className="spices d-flex align-items-center  mt-5">
                                    <img src="./images/spice1.png" alt="" />
                                    <img src="./images/spice2.png" className=" mx-md-4" alt="" />
                                    <img src="./images/spice3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree
