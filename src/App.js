
import './App.css';

// import WhatsNav from '../src/Pages/WhastNav';
// import Chats from '../src/Pages/Chats'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Nav from '../src/Pages/Navbar'
import ChatsDetail from '../src/Pages/ChatsDetails'
import Chats  from '../src/Pages/Chats'


function App() {
  return (
    <>
   
     <Router>
      <div>
      <Nav/>
       
        <Routes>
          
          <Route path='/' element={<Chats  />} />
          <Route path='/Status' element={<ChatsDetail/>} /> 
           {/* <Route path='/' element={<Chats  />} />
          <Route path='/Status' element={<ChatsDetail/>} />
          <Route path='/' element={<Chats  />} />
          <Route path='/Status' element={<ChatsDetail/>} /> 
           <Route path='/Calls' element={<Calls/>} /> 
           <Route path='/UserMessage' element={<UserMessage/>} /> */}

        </Routes>
      </div>
    </Router>
   
    
   
    </>
  );
}

export default App;
