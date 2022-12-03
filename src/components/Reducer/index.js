import React, { createContext, useReducer } from 'react'
import { operar } from '../Logica'

const displayReducer = (state, action) => {

  switch (action.type) {
    case 'NUMBER':
      if(state.display.length === 1 && state.display === '0'){
        return {
          ...state,
          display: action.payload
        };
      }else {return {
        ...state,
        display: state.display + action.payload
      }
    };
    case 'CLEAR':
      return {
        ...state,
        display: '0'
      };
    case 'CORRECT':
      return {
        ...state,
        display: state.display.slice(0, -1)
      };
    case 'OPERATION':
      if(!state.operation){ 
        return {
          ...state,
          operation: action.payload,
          value1: state.display,
          display: state.display + action.payload
      }}
      else if(state.operation === action.payload){
        let inputs = state.display.split(' ')
        if (inputs[2]){
          return {
            ...state,
            value2: inputs[2],
            display: operar(inputs[0],inputs[1],inputs[2]),
            operation: ''
          }
        }else{return {...state}};
      } 
      else if(state.operation !== action.payload){
        let inputs = state.display.split(' ')
        if (!inputs[2]){
          return {
            ...state,
            value2: '',
            display: state.display.slice(0,-3) + action.payload,
            operation: action.payload
          }
        }else return {
          ...state,
          value2: inputs[2],
          display: operar(inputs[0],inputs[1],inputs[2]),
          operation: ''
        }
      }else break;

    case 'POINT':
      if (!state.display.includes('.')){
        return {
          ...state,
          display: state.display + action.payload
        }
      }
      else if (state.display.includes('.')){
        let inputs = state.display.split(' ')
        if ((inputs[2]==='' && inputs[1]) || (inputs[2] && !inputs[2].includes('.'))){
            return {
              ...state,
              display: state.display + action.payload
            }
        }else{return{...state}}
      };
    case 'EQUAL':
      if(state.display){
        let inputs = state.display.split(' ')
        if (inputs[1] && inputs[2]){
          return {
            ...state,
            value2: inputs[2],
            display: operar(inputs[0],inputs[1],inputs[2]),
            operation: ''
          }
        } else {return {...state}}
      }else break;
    default:
      return state;
  }

};
  
const displayInitialValue = {
  display:'0',
  value1:null,
  value2:null,
  operation:null
};

export const DisplayContext = createContext();
  
export const DisplayProvider = ({ children }) => {
  const [display, setDisplay] = useReducer(displayReducer, displayInitialValue);
  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  )
}