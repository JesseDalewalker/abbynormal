import { useEffect, useState } from "react"
import StoryAPI from "../api/StoryAPI"
import { useParams, Link, useNavigate } from "react-router-dom"




function StoryListPage(props) {
  // states
  const [story, setStory] = useState([])


  // params
  const params = useParams()

  // effects
  const loadStories = async () => {
    let data = await StoryAPI.getStoryById(params.id)
    setStory(data)
  }

 
  
  useEffect(() => {
    loadStories()
  }, [])
  
   
    // router params
  const navigate = useNavigate()

  // event handlers
  const handleUpdateStory = async (evt) => {
    evt.preventDefault()

    const storyData = {
      story_title: evt.target.elements["story_title"].value,
      description: evt.target.elements["description"].value,
      location: evt.target.elements["location"].value,
      state: evt.target.elements["state"].value,
      city: evt.target.elements["city"].value,
      country: evt.target.elements["country"].value,
    }

    console.log("SENDING story data:", storyData)

    const data = await StoryAPI.updateStory(story.id, storyData)
  
    if (data) {
      console.log("RECEIVED data:", story.id, data)
      navigate(`/`)
    }
  }
  

  return (
    <div id="viewstory">
      <center>
      <form id="editme" onSubmit={ handleUpdateStory } method="PATCH">
      <input name="story_title" defaultValue={ story.story_title }/>
      <input name="location" defaultValue={ story.location } />
      <textarea id="textbox" name="description" defaultValue={ story.description } />
      <input name="state" defaultValue={ story.state } />
      <input name="city" defaultValue={ story.city } />
      <input name="country" defaultValue={ story.country } />
      <input name="my_image" defaultValue={ story.my_image } />
      <img id="imageedit" src={story.my_image} alt="Error"/><br/>
      <button id="postme" type="submit">Update Story</button>
      </form>
      </center>
     <Link id="viewstoryLink" to="/">Back to My Stories</Link>
    
    </div>
  )
}

export default StoryListPage;