import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


function About() {
    return  <h1>About Little Lemon on this page.</h1>
};

function Menu() {
    return  <h1>About Little Lemon on this page.</h1>
};

function Reservations() {
    return  <h1>Reserve in Little Lemon on this page.</h1>
};

function Order() {
    return  <h1>Order food in Little Lemon on this page.</h1>
};

function Login() {
    return  <h1>Login in Little Lemon on this page.</h1>
};


function Nav() {
    return (
        <BrowserRouter>
        <nav>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/reservations" className="nav-item">Reservations</Link>
            <Link to="/orderonline" className="nav-item">Order Online</Link>
            <Link to="/login" className="nav-item">Login</Link>
        </nav>
            <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/menu" element={<Menu />}></Route>
                <Route path="/reservations" element={<Reservations />}></Route>
                <Route path="/orderonline" element={<Order />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    );
  }

export default Nav;