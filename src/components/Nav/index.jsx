import React from 'react';
import { Link } from '@reach/router'; //se puede cambiar el nombre como { Link as L}
import NavBootstrap from 'react-bootstrap/Nav'; //se pueden renombrar, originalmente es import Nav...
import './index.css';

const Nav = () =>(
    <NavBootstrap className="nav-main">
        <NavBootstrap.Item>
            <Link to="create">Create</Link>
        </NavBootstrap.Item>
        <NavBootstrap.Item>
            <Link to="/">List</Link>
        </NavBootstrap.Item>
    </NavBootstrap>
)

export default Nav;