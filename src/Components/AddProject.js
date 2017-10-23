import React, { Component, StyleSheets } from 'react';
import addProjectStyle from './styles/addProjectStyle.css';

class AddProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newProject: {
        title: '',
        category: '',
      },
      formError: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.valuesAreEntered = this.valuesAreEntered.bind(this);
  }

  componentWillMount() {}

  static defaultProps = {
    categories: ['Web Design', 'Mobile Development', 'Web Development'],
  };

  valuesAreEntered() {
    return this.refs.title.value && this.refs.category.value;
  }

  handleSubmit(e) {
    if (this.valuesAreEntered()) {
      this.setState(
        {
          newProject: {
            title: this.refs.title.value,
            category: this.refs.category.value,
          },
          formError: false,
        },
        function(a) {
          this.props.addProject(this.state.newProject);
        },
      );
    } else {
      this.setState({
        formError: true,
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <div className="AddProject">
        <h3>Add Project</h3>
        {this.state.formError ? (
          <h4 className="addProjectFormError">
            Please enter project title, and choose category.
          </h4>
        ) : (
          ''
        )}
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">
              <option value="" selected disabled hidden>
                Select category
              </option>
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
