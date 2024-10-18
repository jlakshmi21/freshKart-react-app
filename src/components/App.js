import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Items from "./Items";
import Final from "./Final";
import Cart from "./Cart";
import Login from "./Login";

function App(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/final" element={<Final />} />
            <Route path="/items/:type" element={<Items />} />
        </Routes>
    );
}
export default App;