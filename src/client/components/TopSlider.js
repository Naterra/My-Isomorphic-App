import React, { Component } from 'react';
// import img from "../../../public/images/parallax1.jpg";
import img from "../../../public/images/building.jpg";


class TopSlider extends Component{


    render(){
        return(
            <div>
                <img src={img}/>

                <div className="parallax-container">
                    <div className="parallax"></div>
                </div>
            </div>
        );
    }
}

export default TopSlider;