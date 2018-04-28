import React, { Component } from "react";
import ChildPageHeader from '../../display/ChildPageHeader';
import ChildPageMainContainer from '../../display/ChildPageMainContainer';

class ManageBag extends Component {
  state = {};

  render() {
    return (
      <div className="child-page-manage-bag">
      <ChildPageHeader />
      <ChildPageMainContainer />
      </div>
      );
    }
  }

export default ManageBag;


// import React, { Component } from "react";
// import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
//  CardSubtitle, CardBody, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import Header from '../../structure/Header';
// import ChildPageHeader from '../../display/ChildPageHeader';
// import './about.css';
//
//
// class About extends React.Component {
//   state = {};
//
//
// render() {
//   return (
//     <div>
//       <ChildPageHeader />
//       <div className="aboutpageHeader">
//       <h1>Baggage</h1>
//       <h3>Plan and Organize Your Stuff</h3>
//       </div>
//       <div className="managepageCards">
//         <CardDeck>
//
//           <div className="aboutCardContainer">
//           <Card>
//             <CardImg top width="70%" img src={require('../../../images/AboutPage1.jpg')} alt="Card image cap" width="350" height="230" />
//             <CardBody>
//               <CardTitle><h2>Travel Planning</h2></CardTitle>
//               <div className="aboutCardText"><p><CardText>In a boring work meeting and thinking about what you need to pack for an upcoming trip? We've all been there. Baggage allows you to pack a virtual suitcase from anywhere. You can also let your friends and family know what you're packing with the "Shared Bag" feature.</CardText></p></div>
//             </CardBody>
//           </Card>
//         </div>
//
//         <div className="aboutCardContainer">
//           <Card>
//             <CardImg top width="70%" img src={require('../../../images/AboutPage2.jpg')} alt="Card image cap" width="350" height="230" />
//             <CardBody>
//               <CardTitle><h2>Shopping Strategy</h2></CardTitle>
//               <div className="aboutCardText"><p><CardText>Tired of going to the grocery store without a plan and buying way more food than you actually need? Us too. Create a grocery bag before heading to the store to keep you on track -- or create a bag for the person in your life who does the grocery shopping with the "Shared Bag" feature.</CardText></p></div>
//             </CardBody>
//           </Card>
//         </div>
//
//         <div className="aboutCardContainer">
//           <Card>
//             <CardImg top width="70%" img src={require('../../../images/AboutPage3.jpg')} alt="Card image cap" width="350" height="230" />
//             <CardBody>
//               <CardTitle><h2>Tracking Valuables</h2></CardTitle>
//               <div className="aboutCardText"><p><CardText>Having your most prized possessions stolen is terrible. Dealing with insurance claims is also terrible. Make it a little easier by creating a valuables bag to store important information about your products, like serial numbers.</CardText></p></div>
//             </CardBody>
//           </Card>
//         </div>
//
//         <div className="aboutCardContainer">
//           <Card>
//             <CardImg top width="70%" img src={require('../../../images/AboutPage4.jpg')} alt="Card image cap" width="350" height="230" />
//             <CardBody>
//               <CardTitle><h2>Much, Much More...</h2></CardTitle>
//               <div className="aboutCardText"><p><CardText>Basically, you can create any type of bag you'd like, and you can add custom items too. A bag of goods to donate to your nearby shelter? Check. A bag of birthday wish list items to subtly share with your significant other? Check. A bag of materials to remember to bring to that upcoming job interview? Baggage can help you do it all.</CardText></p></div>
//             </CardBody>
//           </Card>
//         </div>
//
//         </CardDeck>
//       </div>
//
//   </div>
//     );
//   }
// }
//
// export default ManageBags;
