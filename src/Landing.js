import React from 'react';
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
      <form onSubmit={this.submitData}>
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
        {/*  */}
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
        {/*  */}
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
        {/*  */}
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
      </form>
    );
  }
}

export default Landing;
