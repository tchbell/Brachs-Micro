import React from 'react';
import logo from './assets/images/Brachs-Logo.png';
import postCard from './assets/images/Desktop/Postcard-Blank.png';
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
            <img class="postCard" src={postCard} className="img-fluid" alt="" />
            <form>
              <div className="row" style={{ height: '100%' }}>
                <div className="col-6 left">
                  {' '}
                  <label className="cardField">
                    Name
                    <input
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                      type="text"
                      required
                    />
                  </label>{' '}
                  <label className="cardField">
                    Email
                    <input
                      name="email"
                      onChange={this.handleChange}
                      value={this.state.email}
                      type="email"
                      required
                    />
                  </label>{' '}
                  <div className="row">
                    {' '}
                    <label className="cardField half">
                      City
                      <input
                        name="city"
                        onChange={this.handleChange}
                        value={this.state.city}
                        type="text"
                        required
                      />
                    </label>
                    <label className="cardField half">
                      State
                      <input
                        name="state"
                        onChange={this.handleChange}
                        value={this.state.namstatee}
                        type="text"
                        required
                      />
                    </label>
                  </div>
                  <label className="cardField">
                    Age
                    <input
                      name="age"
                      onChange={this.handleChange}
                      value={this.state.age}
                      type="number"
                      required
                    />
                  </label>
                  <label className="checkbox">
                    By clicking submit, you agree to receive marketing and
                    promotional emails from Ferrara Candy Company. See Ferrara’s
                    privacy policy here.{' '}
                    <input
                      onChange={this.handleChange}
                      name="privacy"
                      type="checkbox"
                      defaultValue={false}
                      checked={this.state.privacy}
                      required
                    />
                  </label>
                  <label className="checkbox">
                    By checking this box you agree to the User Generated Content
                    Terms & Conditions.
                    <input
                      onChange={this.handleChange}
                      name="terms"
                      type="checkbox"
                      defaultValue={false}
                      checked={this.state.terms}
                      required
                    />
                  </label>
                  <p class="smallText">
                    For your submission to be considered as part of the swap you
                    must be 13+ years of age, complete all submission form
                    questions by 12/16 and include clear instructions of a
                    tradition that uses BRACH’S candy. Upon submitting a holiday
                    tradition, participants 18+ will receive an email from
                    BRACH’S within 24 hours providing a rebate link to redeem
                    their free* 12ct box of BRACH’S Peppermint Candy Canes.
                    (Offer available to first 5000 participants.) Digital
                    holiday cards will be distributed via email the week of
                    12/19.
                  </p>
                </div>
                <div className="col-6 right">
                  {' '}
                  <label className="cardField traditionField">
                    <div>
                      {' '}
                      Tradition{' '}
                      <span className="subText">(1500 character limit)</span>
                    </div>

                    <textarea
                      name="tradition"
                      onChange={this.handleChange}
                      value={this.state.tradition}
                      type="text"
                      rows="4"
                      col="20"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
              </div>
            </form>
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
          <label className="cardField">
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
