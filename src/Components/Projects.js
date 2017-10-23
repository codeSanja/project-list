import React, { Component } from 'react';

class Projects extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="Projects">
                My Projects {this.props.test}
            </div>
        );
    }
}

export default Projects;
