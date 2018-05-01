import React from 'react';
import { Media } from 'reactstrap';

const PictureCard = () => {
  return (
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
  );
};

export default PictureCard;
