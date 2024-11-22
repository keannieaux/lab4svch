import React from 'react';
import './Reviews.css'; 

function Reviews ({ image, author, job }) {
  return (
    <div className="block-testimonials4">
    <p className="dm-sansFont text-browse2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
    <div className="block-testimonials6">
        <img src={image} alt="woman1" />
        <div className="block-text-testimonials">
            <p className="dm-sansFont text-testimonials1">{author}</p>
            <p className="dm-sansFont text-testimonials2">{job}</p>
        </div>
    </div>
</div>
  );
};

export default Reviews;
