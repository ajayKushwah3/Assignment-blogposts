
import { useState } from 'react';
import './assets/style.scss';
import { AuthContext } from "./components/context";
import AllRoutes from './components/Route';
import postslist from './data/postslist.json'
import userslist from './data/userslist.json'
function App() {
  
  const [profileData, setProfileData] = useState([]);
  const [postDetial, setPostDetial] = useState([]);

  return (
    <AuthContext.Provider
    value={{
      postslist,
      userslist,
      profileData,
      setProfileData,
      postDetial,
      setPostDetial
    }}
    >
    <AllRoutes/>
    </AuthContext.Provider>
  );
}

export default App;
