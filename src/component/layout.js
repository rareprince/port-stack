import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Layout() {
  return (
    <section className="navigate">
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'black' }
        }
        className="nav"
        to="/"
      >
        Form
      </NavLink>{''} |
      <NavLink to="repository">Repository</NavLink>
    </section>
  );
}