import React, { Component } from "react";
import Navigation from "./Navigation";

class Resume extends Component {
  render() {
    if (!this.props.data) return null;

const work = this.props.data.work.map((work) => {
  // Format date range string
  const years =
    work.startYear && work.endYear
      ? `${work.startYear} – ${work.endYear}`
      : "Dates unavailable";

  return (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span> &bull; </span> <em className="date">{years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  );
});


    const education = this.props.data.education.map((education) => (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    ));

    // Skills are commented out, keep as is or remove.

    return (
      <>
        <Navigation />
        <section id="resume">
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">{work}</div>
          </div>

          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Resume;
