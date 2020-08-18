import React from 'react';
import Note from './Note';

function Folder( props ){
    console.log( props )

    const filteredNotes = props.notes.filter( (note, index) => {
        if( note.folderName === props.match.params.folderName ){
            return note;
        }
    });

    console.log( filteredNotes );
    return(
        <div>
            <p>
                You are currently under {props.match.params.folderName}
            </p>
            <div>
                {
                    filteredNotes.map( (note, index) => {
                        return( <Note key={index} noteName={note.name} /> )
                    })
                }
            </div>
        </div>
    )
}

export default Folder;