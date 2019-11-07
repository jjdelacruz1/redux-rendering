const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const nameTxt = document.getElementById('input')
const newName = document.getElementById('nameForm');
newName.addEventListener('submit', function(e) {
  // console.log(newName[0].value, "you pressed enter!" )
  e.preventDefault()
  dispatch({ type:"ADDNAME" })
  nameTxt.value = ''
  // console.dir(newName[0].value)
})

