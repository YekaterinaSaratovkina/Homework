import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Nav from "./components/Nav/Nav";
import User from "./pages/User/User";
import Albums from "./pages/Albums/Albums";
import SelectingAnAlbumWithPhotos from "./pages/SelectingAnAlbumWithPhotos/SelectingAnAlbumWithPhotos";
import ToDoList from "./components/ToDoList/ToDoList"
// import AlbomsItemList from "./components/AlbomsItemList/AlbomsItemList";


function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/about" element={<About />} />;
        <Route path ="/user/:id" element={<User />} />;
        <Route path ="/albums" element={<Albums />} />;
        <Route path="/album/:albumId" element={<SelectingAnAlbumWithPhotos />} />;
        <Route path="/to-do-list" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
git add .
git commit -m "dz#2anddz#3"  
git push origin main
*/
