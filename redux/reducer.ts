import {initialState} from './states'

interface Iaction{
  type:string
}

export let reducer = (state = initialState,action:Iaction) => {

  switch (action.type){

    case 'DARK_MODE':
      return {...state,dark:!state.dark}
   
    default:
      return state
    
  }
}
