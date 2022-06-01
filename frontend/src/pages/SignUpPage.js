import { useNavigate } from "react-router-dom"
import StoryAPI from "../api/StoryAPI"

function SignUpPage(props) {

  // router params
  const navigate = useNavigate()

  // event handlers
  const handleSignUp = async (evt) => {
    evt.preventDefault()

    let signupData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    }

    console.log("SIGN UP INFO:", signupData)

    const data = await StoryAPI.signup(signupData)
    
    if (data) {
      console.log("RECEIVED data:", data)
      navigate("/login")
    } 
  }
  
  // render
  return (
    <div>
      <h2>Sign Up Page</h2>
      <br />
      
      <form onSubmit={ handleSignUp } method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="enter username" />
        <br />
        <label>Password: </label>
        <input type="password" name="password" placeholder="enter username" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <br />
    </div>
  )
}

export default SignUpPage;