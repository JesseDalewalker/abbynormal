import { useEffect, useState } from "react"
import StoryAPI from "../api/StoryAPI"
import AddStory from "../components/addStory"
import StoryDetail from "../components/StoryDetail"
import SearchPage from "./SearchPage"
import ImageDetail from "./ImageDetail"

function HomePage(props) {
  // states
 
  const [stories, setStories] = useState([])
  const [images, setImages] = useState([])

  // effects
  useEffect(() => {
    loadStories()
  }, [props.username]) // empty array means do this only one on initial render

  const loadStories = async () => {
    const data = await StoryAPI.getAllStories()
    setStories(data ? data : [])
  }

  useEffect(() => {
    loadImages()
  }, [props.username]) // empty array means do this only one on initial render

  const loadImages = async () => {
    const data = await StoryAPI.getAllImages()
    setImages(data ? data : [])
  }


  const removeStory = (deletedStoryId) => {
    const newstories = stories.filter(() => {
      return stories.id !== deletedStoryId
    })
    setStories(newstories)
    return loadStories()
  }

  const removeImage = (deletedImageId) => {
    const newimages = images.filter(() => {
      return images.id !== deletedImageId
    })
    setImages(newimages)
    return loadImages()
  }

  // render
  const renderStories = () => {
      return stories.map((myStory) => {
        return <StoryDetail key={ myStory.id } myStory={ myStory } removeStory={ removeStory } />
    })
  }

  const renderImages = () => {
      return images.map((myImage) => {
        return <ImageDetail key={ myImage.id } myImage={ myImage } removeImage={ removeImage } />
    })
  }
  
  
  return (
    <div className="main">
 
      <hr />
      <h1 id="welcome" >Welcome, {props.username}</h1>
      <hr />
      <AddStory />

      <h3>All My Stories:</h3>
      { renderStories() }
      { renderImages() }
    </div>
  )
}

export default HomePage;