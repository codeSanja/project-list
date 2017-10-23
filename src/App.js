import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };

    this.handleAddProject = this.handleAddProject.bind(this);
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design',
        },
        {
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development',
        },
      ],
    });
  }

  handleAddProject(newProject) {
    let projects = this.state.projects;
    projects.push(newProject);
    this.setState({projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
