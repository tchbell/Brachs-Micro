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

  submitData = (email, name, tradition, age, city, state) => {
    console.log(
      `Emal: ${email}, Name: ${name}, Tradition: ${tradition}, Age: ${age}, City: ${city}, State: ${state}`
    );
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];
    setTimeout(() => {
      fetch('/api/submission_resource', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          profile: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            gender: '?',
            city: city,
            state: state,
          },
          data: {
            tradition: tradition,
          },
        }),
      });
    }, 1000);
  };

  render() {
    return (
      <div className="sweetnessWrapper">
        <div className="projectContainer">
          {' '}
          <Tabs
            defaultActiveKey="landing"
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
      </div>
    );
  }
}

export default TabsComponent;
