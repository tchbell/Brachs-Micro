import React from 'react';
import logo from './assets/images/Brachs-Logo.png';
import postCardDesktop from './assets/images/Desktop/ThankYouEnvelope-Desktop.png';
import postCardMobile from './assets/images/Mobile/thank-you-envelope-01.png';
class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="thanks">
        {/* <div className="img"></div>s */}
        <div className="copy">
          {' '}
          <img className="img-fluid logo" src={logo} alt="" />
          <h1>
            <span className="big">S</span>weeeet!{' '}
            <span className="regular">Swap In Progress</span>
          </h1>
          <div className="sweeterCard">
            <img
              className="postCard img-fluid desktop"
              src={postCardDesktop}
              alt=""
            />
            <img
              className="postCard img-fluid mobile"
              src={postCardMobile}
              alt=""
            />
          </div>
          <p className="smallText">
            *Valid for residents of 50 U.S. + D.C., 18+. Offer ends 12/31/22.
            Get up to $5.00* back via rebate on your purchase of one (1) package
            of Brach's Peppermint Candy Canes (12 ct., 5.3 oz only). Must
            purchase Brach's Peppermint Candy Canes (12 ct., 5.3 oz) to qualify
            for the rebate. Rebate requests must be received by 1/14/23. Limit
            one (1) rebate per person. Rebate will be paid via Paypal/Venmo. See
            full0{' '}
            <a href="/ugc-termsofuse" rel="noreferrer" target="_blank">
              T&Cs{' '}
            </a>{' '}
            for details.
          </p>
          <p className="smallText">
            {' '}
            **For your submission to be considered as part of the swap you must
            be 13+ years of age, complete all submission form questions by 12/16
            and include clear instructions of a tradition that uses BRACH’S
            candy. Upon submitting a holiday tradition, participants 18+ will
            receive an email from BRACH’S within 24 hours providing a rebate
            link to redeem their free* 12ct box of BRACH’S Peppermint Candy
            Canes. (Offer available to first 5000 participants.) Digital holiday
            cards will be distributed via email the week of 12/19.
          </p>
        </div>
      </div>
    );
  }
}

export default Thanks;
