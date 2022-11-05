import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

//let Form = lazy(() => import('./component/form'));
//let Repository = lazy(() => import('./component/repository'));

const NavBar = () => {
  <Routes>
    <Route path="/" element={<Form />} />
    <Route path="repository" element={<Repository />} />
    <Route
      path="*"
      element={
        <div>
          <h1>404 Page</h1>
          <p>Sorry the page you are looking for does not exist</p>
        </div>
      }
    />
  </Routes>;
};
export default NavBar;
