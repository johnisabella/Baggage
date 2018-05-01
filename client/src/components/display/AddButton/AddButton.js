import React from 'react';
import { Button } from 'reactstrap';

class AddButton extends React.Component {
  render() {
    return (
      <div>
<a href="/EditBag/" className="manage-bags-header-link"><Button color="danger"><i class="fas fa-plus"></i></Button>{' '}</a>
      </div>
    );
  }
}
export default AddButton;

{/* <a href="/EditBag/" className="manage-bags-header-link"><Button color="danger"><i class="fas fa-plus"></i></Button>{' '}' '}</a> */}
