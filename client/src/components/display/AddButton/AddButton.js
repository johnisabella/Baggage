import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


class AddButton extends React.Component {
  render() {
    return (
      <div className="edit-bag-wrapper">
        
        <Link to="/EditBag/" className="edit-bags-link">
        <img src={require('../../../images/addbag.png')} alt="Card image cap" />{' '}
        <div className="edit-bag-overlay">
        <p className="manage-bag-tex">Manage Bag</p>
        </div>
        </Link>
        


      </div>
    );
  }
}
export default AddButton;

{/* <a href="/EditBag/" className="manage-bags-header-link"><Button color="danger"><i class="fas fa-plus"></i></Button>{' '}' '}</a> */}
