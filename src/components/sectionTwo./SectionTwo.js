import React from 'react'
import divider from '../../images/Divider.png'
import dish from '../../images/dish.png'
import cook from '../../images/cook.png'


function SectionTwo() {
    return (
        <div >
            <div className="section-2" data-aos="fade-in" data-aos-delay="100">
                <div className="container">
                    <div className="row row-1">
                        <div className="col-lg-6 d-flex flex-column align-items-center s2-col1-div">
                            <h3 className="ff-y c-g fs-36 fs-sm-26 text-center">Just the right food</h3>
                            <img src={divider} className="mt-2" alt="" />
                            <p className="ff-l fs-6 fw-light mt-4 px-5 text-center">If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food, delicious Lambda cakes,
            muffins, and gourmet coffees make us hard to resist! Stop in today and check us out!</p>
                            <img src={cook} className="mt-4 ps-5" alt="" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <img src={dish} className="dish-img" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
