import StoryAPI from "../api/StoryAPI";
import { useNavigate } from "react-router-dom"


function AddImage(props) {

  // router params
  const navigate = useNavigate()

  // event handlers
  const handleAddImage = async (evt) => {
    evt.preventDefault()

    const imageData = {
      image: evt.target.elements["image"].value
    }
    
    console.log("SENDING image data:", imageData)

    const data = await StoryAPI.postImage(imageData)
  
    if (data) {
      console.log("RECEIVED data:", data)
      navigate(`/`)
    }
  }

  return (
    <div className="panel">
      <center>
      <form onSubmit={ handleAddImage } method="POST">
        <div className="row">
          <label>New Picture:&nbsp;</label><input id="imaging" type="text" name="image" placeholder="Upload your image here"/><button id="postme" type="submit" >Add to my images</button>
        </div>
      </form>
      </center>
      </div>
      )
  }
  
export default AddImage;