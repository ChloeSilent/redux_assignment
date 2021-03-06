import React, { Component } from 'react';
import { connect } from "react-redux";

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor(Math.random() * 40)
        }
        this.setState((prevState) => {
            return { persons: prevState.persons.concat(newPerson) }
        });
    }

    personDeletedHandler = (personId) => {
        this.setState((prevState) => {
            return { persons: prevState.persons.filter(person => person.id !== personId) }
        });
    }

    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.list.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeletedHandler(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        list: state
    };
};

const dispatchToProps = (dispatch) => {
    return {
        personAddedHandler: (name, age) => dispatch({ type: 'ADD_PERSON', personData: { name, age } }),
        personDeletedHandler: (id) => dispatch({ type: 'DELETE_PERSON', id: id }),
    };
};

export default connect(mapStateToProps, dispatchToProps)(Persons);