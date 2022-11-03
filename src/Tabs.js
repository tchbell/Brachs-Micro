import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Landing from './Landing';

class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: 'landing',
      submission: 'submission',

      age: '',
      communication: false,
      email: '',
      name: '',
      terms: false,
      trandition: '',
    };
  }

  submitData = (email, name, tradition, age) => {
    this.setState({ email, name, tradition, age });
    setTimeout(() => {
      console.log(this.state);
    }, 500);

    // setTimeout(() => {
    //   fetch('/api/joke_resource', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       profile: {
    //         age: this.state.age,
    //         name: this.state.name,
    //         email: this.state.email,
    //       },
    //       data: {
    //         tradition: this.state.tradition,
    //       },
    //     }),
    //   });
    // }, 1000);
  };

  render() {
    return (
      <div className="wrapper">
        {' '}
        <Tabs
          defaultActiveKey="home"
          activeKey={this.state.key}
          id=""
          className=""
        >
          <Tab eventKey="landing" title="landing">
            <Landing submitData={this.submitData}></Landing>
          </Tab>
          <Tab eventKey="submission" title="submission"></Tab>
        </Tabs>
      </div>
    );
  }
}

export default TabsComponent;
