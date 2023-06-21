import { Component } from 'react';
import { signUp } from '../../utilities/users-service'

//on of the key distinctions between classes and function components is the extends keyword
// this tells our code "get all the good stuff from Component, but let me make it wokr for my purposes"
export default class SignUpForm extends Component {
    // class components handle state differntly than functions
    // instead of hooks we use the class filed called state
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }
    // handleChange method -> handles user inout in the form 
    //looks at the name of the inout field and updates the values associated with that inout fied in the state
    handleChange = (evt) => {
      // we'll look at the event gther info from the event and update state
      this.setState({
        // we can use a specific syntax to dynamically gather data from the form
        [evt.target.name]: evt.target.value,
        error: ''
      })
    }

    handleSubmit = async (evt) => {
      evt.preventDefault();
      // this was to make this function do something for our componenet
      //alert(JSON.stringify(this.state))
      try {
        // we will run our api call here
        // first we need a copy of our state object
        const formData = {...this.state}
        delete formData.error
        delete formData.confirm
        //another way of doing it
        // const {name, email, password} = this.state
        // const formData = {name, email, password}
        const user = await signUp(formData)
        console.log('this is the user in signup for', user)
        this.props.setUser(user)

      } catch {
          this.setState({ error: 'Sign Up Failed - Go Home'})
      }
    }
    // every single class component NEEDS a render method
    // this render method tells our app what this component returns
    render() {
      const disable = this.state.password !== this.state.confirm;
      return (
        <div>
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              <label>Email</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <label>Confirm</label>
              <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              <button type="submit" disabled={disable}>SIGN UP</button>
            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      );
    }
  }