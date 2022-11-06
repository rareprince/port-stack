import React, { useState, useRef } from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import useForm from "./component/form";
import ErrorBoundary from "./component/error";
import Repository from "./component/repository";
//import Layout from './component/layout';
//import NavBar from './component/Route';

function App() {
  const [gitHubUser, setGitHubUser] = useState([]);
  const { resetForm, input, handleChange } = useForm({ github: "" });
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();}

  const Form = ({ handleSubmit, handleChange, input }) => {};
  const username = githubInput.value;  
  const DisplayGitHubUser = ({ gitHubUser }) => {
    if (gitHubUser?.length === 0) {
      return <div>Kindly input your username</div>;
    }
    return (
      <div>
        value={searchParams.get("filter") || ""}
        onChange=
        {(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
        
        {gitHubUser
          .filter((username) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = username.toLowerCase();
            return 
            name.includes(filter.toLowerCase());
          })
          .map((usename) => {
            <DisplayGitHubUser username={username} />;
          })}
      </div>
    );
  };

  setGitHubUser((prev) => {
        return [...prev, input.github];
  });
  resetForm();

  return (
    <section>
      <div>
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
        </Routes>
        ;
      </div>
      <div className="form">
        <h1 className="header">GITHUB PORTFOLIO</h1>
        <p className="para">
          Enter your Github username to access your portfolio.
        </p>
        <form className="username" ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="github" className="label">
            Username:
          </label>
          <input
            className="input"
            id="github"
            type="text"
            name="github"
            placeholder="e.g. rareprince"
            onChange={handleChange}
            value={input.github}
          />
          {gitHubUser.map((username) => {
            return (
              <a href={`https://github.com/${username}`} target="_blank">
                {" "}
                {username}
              </a>
            );
          })}
        </form>
      </div>
    </section>
  );
}
export default App;
