import * as React from 'react';

const list = [
  {
      title: 'React',
      url: 'https://puppies.com/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
  },
  {
      title: 'Reduxs',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
  },
];


/*Esto es el hola mundog de los pobres */
function App() {

  function getTitle(title){
    return title;
  }

  return (
    <div>
      <h1> My Hacker Stories </h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
            <span>
            <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </li>
          );
        
        })}
      </ul>
    </div>
  );
}
export default App;
