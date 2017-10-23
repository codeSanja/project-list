import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };

    this.handleAddProject = this.handleAddProject.bind(this);
    this.handleDeleteProject = this.handleDeleteProject.bind(this);
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design',
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development',
        },
      ],
    });
  }

  handleAddProject(newProject) {
    let projects = this.state.projects;
    projects.push(newProject);
    this.setState({ projects });
  }
  handleDeleteProject(id) {
    console.log('handleDeleteProject: ' + id);
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject} />
        <Projects
          projects={this.state.projects}
          deleteProject={this.handleDeleteProject}
        />
      </div>
    );
  }
}

export default App;
