import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      // var profilepic =  process.env.PUBLIC_URL +"/images/" + this.props.data.image;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var province = this.props.data.address.province;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="nine columns main-col">
            <h2>About</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  {name}
                  <br />
                  {street}
                  <br />
                  {province}
                  <br />
                  {zip}
                  <br />
                  {phone}
                  <br />
                  {email}
                </p>
              </div>
              <div className="columns download"></div>
            </div>
          </div>
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Cameron Jude Luyt Profile Pic"
            />
            <p>
              <a href="CAMERON.pdf" className="button">
                <i className="fa fa-download"></i> Download CV
              </a>
            </p>
            <div>
  <h2>Technical Profile</h2>
  <div
    className="hobbies"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      // gap: '2rem',
      marginTop: '1rem',
      fontSize: '1.2rem',
      fontWeight: '500',
      color: '#222',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <i className="fab fa-microsoft" style={{ fontSize: '20px' }}></i>
      <span>.NET Core</span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <i className="fas fa-code" style={{ fontSize: '20px' }}></i>
      <span>C#</span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <i className="fas fa-robot" style={{ fontSize: '20px' }}></i>
      <span>Automation Dev</span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <i className="fas fa-project-diagram" style={{ fontSize: '20px' }}></i>
      <span>System Integration</span>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <i className="fas fa-database" style={{ fontSize: '20px' }}></i>
      <span>SQL</span>
    </div>
  </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
