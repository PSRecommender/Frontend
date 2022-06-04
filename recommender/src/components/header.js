import { Navbar } from "react-bootstrap";

function Header(){
    return(
        <nav className="navbar static-top mb-3">
            <div className="container">
                <Navbar.Brand href="/">
                    <img src='../../favicon.png' width={35} height={35} className="me-2 d-inline-block align-top"></img>
                    <h3 className="d-inline-block align-top">어쩔코테</h3>
                </Navbar.Brand>   
            </div>
        </nav>
    )
}
export default Header;