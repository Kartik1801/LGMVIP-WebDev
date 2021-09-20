import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComp } from './nav';
import { CardComp } from './cards';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


function App(props) {

  
  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false)
  
  const getUsers = () => {
    setLoading(true)
    axios.get('https://reqres.in/api/users?page=1')
      .then((user) => {
        setIsUser(true)
        setUserList(user.data.data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data)
        setLoading(false);
      })
  }
  
  return (
    <div className="App">
    <NavbarComp onClick={getUsers} />
    <div className={isUser ? "center-area d-none" : "center-area"}>
      <h1> Welcome to Let's Grow More!</h1>
      <h2> Click the "GET USERS" button! </h2>
    </div>
    <Container className={isUser ? "users-container" : "d-none"} style={{marginTop: "5%"}}>
    <Row>
      {error ? error : userList.map((user,index) => {
        return (
          <CardComp 
            key={index}
            imgSrc={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
            userId={user.id}
          />)
      })}
    </Row>
    </Container>
  </div>
  );
}

export default App;
