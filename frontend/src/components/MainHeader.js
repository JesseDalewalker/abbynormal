import { Link, useNavigate } from "react-router-dom";
import StoryAPI from "../api/StoryAPI";


function MainHeader(props) {
  
  const navigate = useNavigate()
  
  // helpers
  const doLogout = async () => {
    const data = await StoryAPI.logout()
    if (data) {
      props.setUsername("")
      navigate("/")
    }
  }

  // render
  const renderAuthItems = () => {
    if (props.username === "") {
      return (
        <>
          &nbsp;|&nbsp;
          <Link id="login" to="/login">Login</Link>
          &nbsp;|&nbsp;
          <Link id="signup" to="/signup">Sign Up</Link>
        </>
      )
    }

    return (
      <>
        &nbsp;|&nbsp;
        <Link id="logout" to="#" onClick={ doLogout } >Logout</Link>
      </>
    )
  }

  
  return (
    <div id="header">
      <div id="header-title">
        <h1>{ props.title }</h1>
      </div>
      <div id="header-menu">
        <Link id="home" to="/">Home</Link>
        &nbsp;|&nbsp;
        <Link id="search" to="/stories">Search Abnormal Locations</Link>
        &nbsp;|&nbsp;
        <Link id="images" to="/images">Scary Images</Link>
        &nbsp;|&nbsp;
        <Link id="news" to="/articles">Paranormal News</Link>
        { renderAuthItems() }
      </div>
    </div>
  )
}

export default MainHeader;