import React from 'react';
import Hobby from './Hobby';
import AppContext from './AppContext';

class HobbyForm extends React.Component{
    static contextType = AppContext;

    getHobbyFromForm = (event) => {
        event.preventDefault();
        const newHobby = event.target.hobbyName.value;

        this.context.addHobby( newHobby );
    }

    render(){
        return(
            <form onSubmit={this.getHobbyFromForm}>
                <label htmlFor="hobbyName">
                    New hobby:
                </label>
                <input type="text" id="hobbyName" />
                <button type="submit">
                    Add Hobby
                </button>
            </form>
        )
    }
}

export default HobbyForm;