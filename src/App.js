import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [post, setPosts]= useState('')

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.json()
    })
    .then(data =>{
      console.log(data)
    })
}, [])

const CardListItem = props => {
  return (
    <li>
      <div
        className="card-container"
        style={{
          width: "50%",
          border: "solid 3px #d3d3d3",
          margin: "10px auto"
        }}
      >
        <h3>
          <strong>{props.character.name}</strong>
        </h3>
        <p>{props.character.alterEgo}</p>
        
      
      </div>
    </li>
  );
};

const CardList = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {posts.map(data => {
        return <CardListItem data={data} key={data.id} />;
      })}
    </ul>
  );
};

  return (
    <div className="App">
      <h1>Posts</h1>
      


    </div>
  );
}

export default App;
