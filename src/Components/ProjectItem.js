import React, { Component } from 'react';

class ProjectItem extends Component {
  constructor(props){
    super(props);

    this.deleteProject = this.deleteProject.bind(this);
  }

  deleteProject(e) {
    console.log('test');

    this.props.deleteProject('testId');
    e.preventDefault();
  }

  render() {
    return (
      <li className="ProjectItem">
        {this.props.project.title} - {this.props.project.category}
        <span> </span>
        <a href="" onClick={this.deleteProject}>
          <strong>x</strong>
        </a>
      </li>
    );
  }
}

export default ProjectItem;
