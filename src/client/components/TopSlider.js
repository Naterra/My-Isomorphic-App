import React, { Component } from 'react';
let img = "./parallax1.jpg";


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