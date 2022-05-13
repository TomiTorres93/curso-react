import { Link } from 'react-router-dom';

import './Navbar.css';
import logohodl from './img/logohodl.png';
import Carrito from './CartWidget';


function Navbar() {
    return (
<nav>
<img src={logohodl} className="logoIcon" alt="Logo de la marca" />
  <ul className="menu-cont">
  <Link className='link' to={`/`}>
    <a className="menu-item borde1" href="">HOME</a></Link>
    <a className="menu-item borde2" href="">PRODUCTOS</a>
    <a className="menu-item borde3" href="">NOSOTROS</a>
    <a className="menu-item borde4" href="">CONTACTO</a>
  </ul>
  <Carrito />

</nav>
    ); }


export default Navbar;
