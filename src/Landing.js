import React from 'react';
import logo from './assets/images/Brachs-Logo.png';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      communication: false,
      email: '',
      name: '',
      terms: false,
      tradition: '',
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  submitData = (e) => {
    e.preventDefault();
    this.props.submitData(
      this.state.email,
      this.state.name,
      this.state.tradition,
      this.state.age
    );
  };

  render() {
    return (
      <div className="landing">
        {/* <div className="img"></div>s */}
        <div className="copy">
          {' '}
          <img className="img-fluid logo" src={logo} alt="" />
          <h1>Sweetness Swap</h1>
          <p>
            BRACH’S is making moments sweeter this holiday season, bringing
            generations together with our first-ever nationwide tradition swap.
          </p>
          <p>
            On December 4th, tune in on IG Live to watch{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/macklemore/"
            >
              Macklemore
            </a>{' '}
            and Babs from{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/brunchwithbabs/?hl=en"
            >
              Brunch with Babs
            </a>{' '}
            kick off the swap by trying each other’s favorite holiday
            traditions!
          </p>
          <div className="sweeterCard">
            {/* <img className="img-fluid" src={cardBg} alt="" /> */}
            <h2 className="sweeterHeadline desktop">
              Want to make <span className="lobster">your</span> moments
              sweeter?
            </h2>
            <h2 className="sweeterHeadline mobile">
              {' '}
              Want to make <br />
              <span className="lobster">your</span>
              <br /> moments
              <br /> sweeter?
            </h2>
            <p>
              Come back on December 5th to submit instructions for your favorite
              holiday tradition involving candy. In exchange, you'll receive a
              voucher for a free box of BRACH'S Peppermint Candy Canes* and a
              new festive activity to try this season.
            </p>
          </div>
          <p className="disclaimer">
            *Valid for residents of 50 U.S. + D.C., 18+. Offer ends 12/31/22.
            Get up to $5.00* back via rebate on your purchase of one (1) package
            of Brach's Peppermint Candy Canes (12 ct., 5.3 oz only). Must
            purchase Brach's Peppermint Candy Canes (12 ct., 5.3 oz) to qualify
            for the rebate. Rebate requests must be received by 1/14/23. Limit
            one (1) rebate per person. Rebate will be paid via Paypal/Venmo. See
            full{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://c.airbaton.net/campaigns/zjd6SgaiBCKzUr0by1yy/assets/R1arMJ1hg.pdf"
            >
              T&Cs
            </a>{' '}
            for details.
          </p>
          {/* <form method="post" action="/form/emailsignup">
            <fieldset>
              <button type="submit" className="subscribe">
                Subscribe
              </button>
            </fieldset>
          </form> */}
        </div>
        {''}

        {/* <form onSubmit={this.submitData}>
          <label className="name">
            Name
            <input
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              type="text"
              required
            />
          </label>
   
          <label className="email">
            Email
            <input
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
              type="email"
            />
          </label>
   
          <label className="age">
            Age
            <input
              name="age"
              onChange={this.handleChange}
              value={this.state.age}
              required
              type="age"
            />
          </label>
  
          <label className="tradition">
            Tradition
            <input
              name="tradition"
              onChange={this.handleChange}
              value={this.state.trandition}
              required
              type="text"
            />
          </label>
          <label>
            I agree to the Terms and Conditions
            <input
              onChange={this.handleChange}
              name="terms"
              type="checkbox"
              defaultValue={false}
              checked={this.state.terms}
              required
            />
          </label>
          <label>
            I would like to recieve emails form Brach's
            <input
              onChange={this.handleChange}
              name="communication"
              type="checkbox"
              defaultValue={false}
              checked={this.state.communication}
            />
          </label>
          <button type="submit">Submit</button>
        </form> */}
      </div>
    );
  }
}

export default Landing;
