import React from "react";
import './PremiumBlock.css';
import womanIcon from './image/woman.svg';
import chevronIcon from './image/chevron_right.svg';

function PremiumBlock () {
    return (
        <div className="block-premium">
            <div className="block-premium1">
                <img src={womanIcon} alt="woman" id="wo" />
                <div className="block-premium2">
                    <p className="poppinsFont text-block-premium1" id="pre">Premium courses from the industry leaders</p>
                    <p className="dm-sansFont text-block-premium2" id="lor2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div className="button-premium">
                        <div className="button-premium1">
                            <p className="dm-sansFont text-block-premium3" id="ge">Get started</p>
                        </div>
                        <div className="button-premium2">
                            <p className="dm-sansFont text-block-premium4" id="lea">Learn more</p>
                            <img src={chevronIcon} alt="chevron_right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumBlock;
