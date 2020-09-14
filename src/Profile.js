import React from 'react';
import AppContext from './AppContext';

/*
class Profile extends React.Component{
    static contextType = AppContext;

    render(){
        return( 
            <div>
                <h2> This is the profile of {this.context.name} </h2>
                <ul>
                    {
                        this.context.hobbies.map( (hobby, index) => {
                            return ( <li key={index}>{hobby}</li>)
                        })
                    }
                </ul>
            </div>
        );
    }
    
} */

function Profile(){
    return(
        <AppContext.Consumer>
            {
                ( context ) => {
                    console.log("context in functional component", context )
                    return (
                        <div>
                            <h2> This is the profile of {context.name} </h2>
                            <ul>
                                {
                                    context.hobbies.map( (hobby, index) => {
                                        return ( <li key={index}>{hobby}</li>)
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            }
        </AppContext.Consumer>
    )
}

export default Profile;