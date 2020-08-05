import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                    <h3>{projects.title}</h3>
                    <p>{projects.category}</p>
                    <div className="meta-buttons">
                      <a href={projects.url} title={projects.title} target="_blank"><button name="code" className="view-code-btn">View Code</button></a>
                      {projects.demo && (
                        <a href={projects.demo} title={projects.title} target="_blank"><button name="demo" className="view-demo-btn success">View Demo</button></a>
                      )}
                    </div>
                </div>
              </div>
            </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out My Projects</h1>

            <div id="portfolio-wrapper" className="cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
