import React, {useState, useEffect, useRef, useMemo, useReducer} from "react";

const ToDoReducer  = (state, action) =>{
    switch(action.type){
        case 'ADD':
            return [...state, action.payload];
        case 'TOGGLE':
            return state.map(toDo =>
                toDo.id === action.payload ? { ...toDo, completed: !toDo.completed} : toDo
            );
        case 'DELETE':
            return state.filter(toDo => toDo.id !== action.payload);
        default:
            return state;
    }
};



export default ToDoReducer;