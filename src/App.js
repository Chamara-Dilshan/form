
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css';
import AdminForm from './pages/AdminForm'
import UserForm from './pages/UserForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<AdminForm/>}></Route>
            <Route path="/UserForm" element={<UserForm/>}></Route>




          </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
