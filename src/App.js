import { Route, Routes } from 'react-router-dom';
import './App.css';
// eslint-disable-next-line
import AddForm from './components/AddForm/AddForm';
import EditForm from './components/EditForm/EditForm';
// eslint-disable-next-line
import List from './components/List/List';
import NavBar from './components/NavBar/NavBar';

function App() {
  
  // let today = new Date();
  // console.log('now()', today.toLocaleString())
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <NavBar/>
      <Routes>
        <Route path='/' element={<List />}/>
        <Route path='/create' element={<AddForm />}/>
        <Route path='/edit' element={<EditForm />}/>
      </Routes>
    </div>
  );
}

export default App;
