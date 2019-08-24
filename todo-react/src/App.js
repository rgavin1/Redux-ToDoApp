import React from 'react';
import { createStore } from 'redux';

class App extends React.Component {
  
  render(){
  const REMOVE_ITEM = 'REMOVE_ITEM';

  const currentState = [
    { 
      id: 0,
      item: 'Make ToDO List'
    },
    {
      id: 1,
      item: 'Create Website'
    },
    {
      id: 2,
      item: 'Learn MongoDB'
    }
  ]

  const rootReducer = (state = currentState, action) => {
      switch(action.type){
        case REMOVE_ITEM:
            let newState = [...state];
            newState.splice(action.id, 1);
            return newState;
        default:
          return state;
      }
  }

  const store = createStore(rootReducer);

  const removeAction = (id) => {
    return {
      type: REMOVE_ITEM,
      id
    }
  }

  this.handleClick = (index) => {
    store.dispatch(removeAction(index));
    console.log(index);
  }


  console.log(store.getState());

  const ToDoList = store.getState().map(data => {
    return <div onClick={() => {this.handleClick(data.id)}} key={data.id}>{data.item}</div>
  })

  return (
    <div className="App">
      <h1>TODO</h1>
     <div>
       <span>{ToDoList}</span>
     </div> 
    </div>
  );
  }
}

export default App;
