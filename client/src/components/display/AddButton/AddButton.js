import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


class AddButton extends React.Component {
  render() {
    return (
      <div>

<a href="/EditBag/" className="manage-bags-header-link"><Button color="danger"><i class="fas fa-plus"></i></Button>{' '}</a>

        {/* <Button color="danger"><img src={require('../../../images/addbagimage.png')} alt="Card image cap" /></Button>{' '} */}

        <Link to="/EditBag/" className="manage-bags-header-link">
        <img src={require('../../../images/addbagimage.png')} alt="Card image cap" />{' '}
        </Link>


      </div>
    );
  }
}
export default AddButton;

{/* <a href="/EditBag/" className="manage-bags-header-link"><Button color="danger"><i class="fas fa-plus"></i></Button>{' '}' '}</a> */}
