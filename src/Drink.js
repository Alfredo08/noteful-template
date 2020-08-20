import React from 'react';

function Drink( props ){
    console.log( props.drink );
    return( 
        <div>
            <h2> {props.drink.strDrink} </h2>
            <img src={props.drink.strDrinkThumb} width="300" alt={props.drink.strDrink}/>
        </div>
    );
}

export default Drink;