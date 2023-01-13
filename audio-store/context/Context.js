import React, { createContext, useContext, useReducer } from 'react';
import reducer, {initialState} from './Reducer';

const cartContext = createContext()

export const ContextProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addItem = (item, qty) =>{
        dispatch({
            type : "ADD_ITEM",
            item : {...item, quatity: qty}
        })
    }

    const reduceQuantity=(id)=>{
        dispatch({
            type : "DECREASE_QTY",
            id : id
        })
    }
    const removeItem=(item)=>{
        dispatch({
            type : 'REMOVE',
            item : item
        })
    }

    const values = {
        items: state.items,
        total:state.totalAmount,
        add: addItem,
        reduceQty : reduceQuantity,
        remove: removeItem
    }

    return (
        <cartContext.Provider value={ values }>
            { children }
        </cartContext.Provider>
    )
}

export const stateContext =() => useContext( cartContext );