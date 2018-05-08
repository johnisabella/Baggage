import React from 'react';
import { Media } from 'reactstrap';

const PictureCard = () => {
  return (
      <Media href="#">
        <Media object src={require('../../../images/editbag.png')} alt="bag image" />
      </Media>
  );
};

export default PictureCard;

// {require('../../../images/logo_primary.png')}