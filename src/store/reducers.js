const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case 'ADD_PERSON': 
        return {
            ...state,
            persons: state.persons.concat({ id: Math.random(), name: 'Max', age: Math.floor(Math.random() * 40)})
        }
        case 'DELETE_PERSON':
            let newArr = state.persons.filter(person => person.id !== action.id) 
            return {
                ...state,
                persons: newArr
        }
        default:
        return state;
    }
}


export default reducer;