import React, {useState} from "react";
import "./style.css";
import useForm from './component/form';
//import ErrorBoundary from './component/error';
//import {Routes, Route} from 'react-router-dom';
import Layout from './component/layout';
import NavBar from './component/Route';

const Form =({handleSubmit, handleChange, input})=> {
return (
  <section>
    <div className="form">
      <h1 className="header">GITHUB PORTFOLIO</h1>
      <p className="para">
        Enter your Github username to access your portfolio.
      </p>
      <form className="username" ref={FormRef} onSubmit={handleSubmit}>
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
        {gitHubUser.map((username)=>{
          return(<a href={`https://github.com/${username}`} target="_blank"> {username}</a>)
        })}
      </form>
    </div>
  </section>
)
}

const DisplayGitHubUser = ({gitHubUser})=>{
  if (gitHubUser?.length===0) {
    return<div>Kindly input your username</div>
  }
  return(<div>
    value={searchParams.get('filter')||''}
    onChange={(event)=>{
      let filter =event.target.value;
      if (filter){
        setSearchParams({filter});
      } else {
        setSearchParams({});
      }
    }}
{gitHubUser.filter((username)=>{
  let fil
})}
    </div>)
}



export default function App() {
  const [gitHubUser, setGitHubUser] = useState([]);
  const { resetForm, input, handleChange } = useForm({ github: '' });
  
  const handleSubmit = (event) => {
    event.preventDefault();

    setGitHubUser((prev) => {
      return [...prev, input.github];});
      resetForm();
  };
  const [isActive, setIsActive] = useState(false);


  return (
    <section>
      <Layout />
      <Form/>
      <NavBar />
    </section>
  );
}
