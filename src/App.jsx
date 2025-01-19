import "./App.css";
import "./tailwind.css"
import "./css/Index.css"
import { Routes, Route } from "react-router";
import ServicesRoutes from "./ServicesRoutes"
import LoginPage from "./pages/LoginPage/LoginPage"
import ForgotPassword from "./container/Credentials/ForgotPassword";
import Register from "./container/Credentials/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<ServicesRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
