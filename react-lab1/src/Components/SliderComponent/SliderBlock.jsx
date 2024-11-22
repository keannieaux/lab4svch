import React from 'react';
import './SliderBlock.css';

function SliderBlock ({ image, beginnerLevel, courseTitle, price, buttonText }) {
    return (
        <div className="img-trending">
            <div className="img-pc">
                <div className="shopping_cart">
                    <img src={image} alt="course" />
                </div>
                <div className="text-img-pc">
                    <div className="text-block-pc">
                        <div className="button-img-pc">
                            <p className="dm-sansFont text-img-pc1">{beginnerLevel}</p>
                        </div>
                        <p className="poppinsFont text-img-pc2">{courseTitle}</p>
                        <p className="dm-sansFont text-img-pc3">{price}</p>
                    </div>
                    <div className="button-img-pc1">
                        <p className="dm-sansFont text-img-pc4">{buttonText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderBlock;
