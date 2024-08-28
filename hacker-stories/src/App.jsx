import * as React from 'react';



/*Esto es el hola mundog de los pobres */
function App() {

  function getTitle(title){
    return title;
  }

  return (
    <div>
      <h1>
        Hola {getTitle('Mundog')}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}
export default App;
