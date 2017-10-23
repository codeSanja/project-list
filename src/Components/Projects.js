import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.deleteProject = this.deleteProject.bind(this);
  }

  deleteProject(id) {
    this.props.deleteProject(id);
  }

  render() {
    let projectItems = [];
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem
            key={project.id}
            project={project}
            deleteProject={this.deleteProject}
          />
        );
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
