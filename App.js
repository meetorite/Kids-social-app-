import React, { useState, useEffect } from "react";
import axios from axios.get("https://your-backend.onrender.com/users")

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://your-backend-url.onrender.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Kids Social Media</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.profile_picture} alt={user.name} width="50" />
            {user.name} (Age: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
