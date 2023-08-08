import {BrowserRouter, Route, Routes} from "react-router-dom"
import Main from './page/main';
import Profile from './page/profile';
import Menu from './page/menu';
import Detail from './page/detail';

function App() {
    return (
        <BrowserRouter>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Itim&family=Mitr:wght@200;300;400;500;600;700&family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/detail" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
