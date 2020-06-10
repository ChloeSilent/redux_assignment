import React from 'react';

import './AddPerson.css';

class addPerson extends React.Component {

    state = {
        name: "",
        age: ""
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    ageChangeHandler = (e) => {
        this.setState({
            age: e.target.value
        })
    }


    render() {
        return (
            <div className="AddPerson">
                <input className="text"
                    placeholder="name"
                    onChange={this.nameChangeHandler}
                    value={this.state.name}
                />
                <input
                    className="text"
                    placeholder="age"
                    onChange={this.ageChangeHandler}
                    value={this.state.age}
                />
                <button onClick={() => { this.props.personAdded(this.state.name, this.state.age) }}>Add Person</button>
            </div>
        )
    }

};

export default addPerson;