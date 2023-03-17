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

  
  console.log(posts)
  return (
    <div className="App" style={{backgroundColor:'#b1dbfe'}}>
      <h1 style={{color:'#001e39'}}>Posts</h1>
      <div style={{
        display:'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        
      }}>
        <div>
          {
            posts.map((post)=>(
              <div
                key={post.id}
                onClick={event=> {toggleModal(event,post.id);setCount(post.id-1)}}
                className="card-container"
                style={{
                  backgroundColor:'#003a6c',
                  width: "50%",
                  border: "solid 3px #d3d3d3",
                  margin: "10px auto",
                  
                  
                }}
              >
                <div style={{backgroundColor:'#003a6c',margin:'10px auto'}}>
                <h2 style={{color:'white'}}>
                  <strong>{post.title}</strong>
                </h2>
                </div>
                
                <p style={{
                  fontSize:'20px',
                  color:'#f2f9ff',
                  margin:'10px '
                }}>{post.body}</p>

                <button style={{
                  fontSize:'20px',
                  backgroundColor:'#00539b',
                  color:'white',
                  margin:'10px auto',
                  padding:'5px',
                  border: "solid 3px #f2f9ff",
                  
                }} onClick={event=> {toggleModal(event,post.id);setCount(post.id-1)}}>Click Me</button>
                <h3></h3>
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
