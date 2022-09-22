//yarn add @types/react-router-dom -D
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    //yarn add react-router-dom@6
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/rooms/new" element={<NewRoom/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
