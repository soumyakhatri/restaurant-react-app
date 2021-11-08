import React from 'react';
import img1 from '../../images/square-dish-1.png';
import img2 from '../../images/square-dish-2.png';
import pattern2 from '../../images/pattern2.png';
import divider from '../../images/Divider.png';
import Form from './Form';


function SectionSixPresentational(props) {
    return (
        <div>
            <div>
                <div class="section-6">
                    <div class="container">
                        <div class="row row-1 d-flex">
                            <div class="col-xl-6 px-0">
                                <div className='row mx-0'>
                                    <div data-aos="slide-up" data-aos-delay="100" data-aos-duration="500" className='col col-lg-6 d-flex justify-content-center'>
                                        <img  className='pb-3 pb-lg-0' src={img1}/>
                                    </div>
                                    <div data-aos="slide-up" data-aos-delay="200" className='col col-lg-6 d-flex justify-content-center'>
                                        <img className='pb-3 pb-lg-0' src={img2}/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 d-flex px-lg-5 px-2 mt-lg-0 mt-5 flex-column align-items-center">
                                <h3 class="ff-y fs-36 fs-sm-26 c-g">Just the right food</h3>
                                <img class="mt-2" src={divider} alt="" />
                                <p class="text-center fw-light mt-4">If you’ve been to one of our restaurants, you’ve seen – and tasted – what keeps our customers coming back for more. Perfect materials and freshly baked food.</p>
                                <p class="text-center fw-light mt-2">Delicious Lambda cakes, muffins, and gourmet coffees make us hard to resist! Stop in today and check us out! Perfect materials and freshly baked food.</p>
                                {props.children}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionSixPresentational
