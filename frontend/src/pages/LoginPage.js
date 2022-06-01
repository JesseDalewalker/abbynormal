import { useNavigate } from "react-router-dom"
import StoryAPI from "../api/StoryAPI"

function LoginPage(props) {

  // router params
  const navigate = useNavigate()

  // event handlers
  const handleLogin = async (evt) => {
    evt.preventDefault()

    let loginData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    }

    console.log("LOGIN INFO:", loginData)

    const data = await StoryAPI.login(loginData)
    
    if (data) {
      props.setUsername(data.username)
      navigate("/")
    }
  }
  
  // render
  return (
    <div className="main">
      <h2>Login Page</h2>
      <br />
      
      <form onSubmit={ handleLogin } method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="enter username" />
        <br />
        <label>Password: </label>
        <input type="password" name="password" placeholder="enter username" />
        <br />
        <button type="submit">Login</button>
        
      </form>
        <br />
    </div>
  )
}

export default LoginPage;