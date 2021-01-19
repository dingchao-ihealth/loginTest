import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

const Login = (props) => {
  return (
    <div>
      <div className="container">
          <form>
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Username" name="username" required onChange={props.updateState} />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Password" name="password" required onChange={props.updateState}/>
                
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" name="rememberMe" onChange={props.updateState}/> Remember me
            </label>
          </form>
      </div>

      <div className="container">
        <span className="psw">Forgot <a href="/forgot">password?</a></span>
      </div>
    </div>
  )
}
const Forgot = () => <div><h2>Forgot Password</h2></div>


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      remmeberMe: false
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState(e){
    const name = e.target.name;
    this.setState({
      [name] : e.target.value
    })
  }

  render() {
    return (
     <HashRouter basename='/'>
       <Route exact path="/" component={Login} updateState={this.updateState} remmeberMe={this.state.remmeberMe}/>
       <Route path="/forgot" component={Forgot} />
     </HashRouter>
    );
   }
}

export default App;
