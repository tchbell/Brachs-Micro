import React from 'react';
import logo from './assets/images/Brachs-Logo.png';
import postCardDesktop from './assets/images/Desktop/Postcard-Blank.png';
import postCardMobile from './assets/images/Mobile/Postcard-Envelope-Mobile.png';
class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      communication: false,
      email: '',
      name: '',
      terms: false,
      privacy: false,
      tradition: '',
      state: '',
      city: '',
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
    console.log(e);
    e.preventDefault();
    this.props.submitData(
      this.state.email,
      this.state.name,
      this.state.tradition,
      this.state.age,
      this.state.city,
      this.state.state
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
            BRACH’S is making moments sweeter this holiday season by bringing
            generations together for our first-ever holiday tradition swap.
            <a
              href="https://www.instagram.com/macklemore/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Macklemore
            </a>{' '}
            and{' '}
            <a
              href="https://www.instagram.com/brunchwithbabs/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Babs from Brunch
            </a>{' '}
            officially{' '}
            <a href="#" target="_blank" rel="noreferrer">
              kicked off the swap
            </a>{' '}
            and now submissions are open for everyone!
          </p>
          <p>
            Submit your favorite holiday tradition using candy in exchange for a
            box of free Brach's Peppermint Candy Canes* and a new (well, new to
            you!) festive activity to try this season with family and friends.
          </p>
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
            <form id="formId" onSubmit={this.submitData}>
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
                  <div className="labelRow">
                    {' '}
                    <label className="cardField half marginLess">
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
                    <div>
                      By clicking submit, you agree to receive marketing and
                      promotional emails from Ferrara Candy Company. See
                      Ferrara’s privacy policy{' '}
                      <a
                        href="https://www.ferrarausa.com/privacy-policy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here
                      </a>
                      .{' '}
                    </div>{' '}
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
                    <div>
                      By checking this box you agree to the{' '}
                      <a href="/ugc-termsofuse" rel="noreferrer" target="_blank">
                        User Generated Content Terms & Conditions.
                      </a>
                    </div>

                    <input
                      onChange={this.handleChange}
                      name="terms"
                      type="checkbox"
                      defaultValue={false}
                      checked={this.state.terms}
                      required
                    />
                  </label>
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
                      maxLength={1500}
                      type="text"
                      rows="4"
                      col="20"
                      required
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
          <button type="submit" form="formId">
            I Want Candy Canes!
          </button>
          <p className="disclaimerTxt">
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
          <p className="disclaimerTxt ">
            For your submission to be considered as part of the swap you must be
            13+ years of age, complete all submission form questions by 12/16
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

export default Landing;
