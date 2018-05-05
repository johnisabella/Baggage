// import React from 'react';
// import { Button } from 'reactstrap';
//
// class EditButton extends React.Component {
//   render() {
//     return (
//       <div>
// <a href="/EditBag/" className="manage-bags-header-link"><Button color="danger"><i class="far fa-edit"></i></Button>{' '}</a>
//       </div>
//     );
//   }
// }
// export default EditButton;


import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';


class EditButton extends React.Component {
  render() {
    return (
      <div className="edit-bag-wrapper">

        <Link to="/EditItem/" className="edit-bags-link">
        <img src={require('../../../images/existingbag.png')} alt="Card image cap" />{' '}
        <div className="edit-bag-overlay">
        <img src={require('../../../images/pencil-icon.png')} className="plus-sign" alt="plus sign manage bag image" />{' '}
        {/* <p className="manage-bag-tex">Manage Bag</p> */}
        </div>
        </Link>



      </div>
    );
  }
}
export default EditButton;

{/* <a href="/EditBag/" className="manage-bags-header-link"><Button color="danger"><i class="fas fa-plus"></i></Button>{' '}' '}</a> */}
