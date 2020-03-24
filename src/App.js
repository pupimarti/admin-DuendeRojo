import React, {useState} from 'react';
import Admin from './Admin';
import Login from './Login';
import './App.css';

function App() {
  const [user, setUser] = useState({user:'', contraseña:''});

  const [logeado, setLogeado] = useState(false);

  const [error, setError] = useState("");

  const handleInputChange = event => {
    event.persist();
    setUser({...user, [event.target.name]:event.target.value});
  };

  const handleSubmit = (event) => {
    if (user.user === 'admin' && user.contraseña === "admin") {
      setLogeado(true);
    }else{
      setError("error");
    }
  }

  return (
    <div className="App">
      {logeado === true?
        <Admin />
      :
        <Login 
        user={user}
        handleInputChange={handleInputChange} 
        handleSubmit={handleSubmit}
        error={error} />
      }

    </div>
  );
}

export default App;
