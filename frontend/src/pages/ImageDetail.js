import StoryAPI from "../api/StoryAPI";


function ImageDetail(props) {

  // router params

  // event handlers
  const handleDeleteImage = async () => {
    const data = await StoryAPI.deleteImageById(props.myImage.id) // this is to remove the data from the Django API
    if (data) {
      props.removeImage(props.myImage.id) // this is just to remove the data from the parent (nothing to do with the Django API)
    }
  }

return (
  
 
    <div className="image">
      <center>
        <img id="myimages" src={props.myImage.image} alt="" />
        <button className="btn-copy" onClick={() =>  navigator.clipboard.writeText(props.myImage.image)}
          >Copy</button>
        <button className="btn-delete" onClick={ handleDeleteImage }>DELETE</button>
      </center>
    </div>

                           
                          
)
}

export default ImageDetail;
           