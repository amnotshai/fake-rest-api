import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import './components/Modal';

function App() {
const [posts, setPosts]= useState([])

const [modal, setModal] = useState(false);
  const [arrId, setCount] = useState(0);

  const toggleModal = (event,key) => {
    setModal(!modal);
    
    
    
   
    
  };
  

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.json()
    })
    .then(value =>setPosts(value))
}, [])

  

  return (
    <div className="App">
      <h1>Posts</h1>
      <div style={{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
        
      }}>
        <div>
          {
            posts.map((post)=>(
              <div
                key={post.id}
                onClick={event=> {toggleModal(event,post.id);setCount(post.id-1)}}
                className="card-container"
                style={{
                  width: "30%",
                  border: "solid 3px #d3d3d3",
                  margin: "10px auto"
                }}
              >
                <h3>
                  <strong>{post.title}</strong>
                </h3>
                <p>{post.body}</p>

                <button onClick={event=> {toggleModal(event,post.id);setCount(post.id-1)}}>Click Me</button>
              </div>
            ))
          }    
        </div>

      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} ></div>
            <div className="modal-content">
              <h4 align='left'>{window.location.host} says</h4>
              <h5>You clicked {posts[arrId].title}</h5>
              <button className="close-modal" onClick={toggleModal}>
                OK
              </button>
            </div>
        </div>
      )}
      

      
      
      


    </div>
  );
}

export default App;
