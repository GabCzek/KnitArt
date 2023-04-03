import Main from "./js/main.js";
import "./App.scss";
import {
    HashRouter,
    Route,
    Routes,
    Link,
    NavLink,
    Outlet
} from 'react-router-dom';
import Template from "./js/createTemplate";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/template' element={<Template/>}/>
            </Routes>
        </HashRouter>
    )
}


export default App;
