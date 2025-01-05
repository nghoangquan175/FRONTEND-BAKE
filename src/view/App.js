import Nav from "../components/navigation/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './global.scss'
import Home from "../components/home/Home";
import Auth from "../components/auth/Auth"
import NotFound from "../components/notFound/NotFound"
import Cart from "../components/cart/Cart"
import Products from "../components/products/Products"
import { useSelector } from "react-redux";

function App() {
    const username = useSelector((state) => state.user.data.username)

    return (
        <BrowserRouter>
            <div className="App">
                {username ? <Nav username={username} /> : ''}
                <Routes>
                    <Route path="/" element={<Home username={username} />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    closeOnClick={true}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
