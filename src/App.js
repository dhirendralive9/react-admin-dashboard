import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List"
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs, productInputs } from './formSource';
import './style/dark.scss';
import { useContext } from "react";


import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
       <BrowserRouter>
    <Routes>
      <Route path="/"  element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }/>
      <Route path="login" element={<Login/>} />
      <Route path="users">
        <Route index element={<List/>} />
        <Route path=":userId" element={<Single/>}/>
        <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
      </Route>
      <Route path="products">
        <Route index element={<List/>} />
        <Route path=":productId" element={<Single/>}/>
        <Route path="new" element={<New inputs={productInputs} title="Add New Product" />}/> 
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
