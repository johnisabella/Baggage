import React from 'react';
// import { Button } from 'reactstrap';

class AddButton extends React.Component {
  render() {
    return (
      <div>
        {/* <Button color="danger"><img src={require('../../../images/addbagimage.png')} alt="Card image cap" /></Button>{' '} */}
        <a href="/EditBag/" className="manage-bags-header-link">
        <img src={require('../../../images/addbagimage.png')} alt="Card image cap" />{' '}</a>
      </div>
    );
  }
}
export default AddButton;
