import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let projectItems = [];
    if (this.props.projects) {
      projectItems = this.props.projects.map((project) => {
        console.log(project);
        return <ProjectItem project={project} />;
      });
    } else {
      projectItems = [];
    }

    return (
      <div className="Projects" projects={this.props.projects}>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
