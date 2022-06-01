import StoryAPI from "../api/StoryAPI";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "react";


export default function AddStory(props) {

  // router params
  const navigate = useNavigate()

  // event handlers
  const handleCreateStory = async (evt) => {
    evt.preventDefault()

    const storyData = {
      story_title: evt.target.elements["story_title"].value,
      description: evt.target.elements["description"].value,
      location: evt.target.elements["location"].value,
      state: evt.target.elements["state"].value,
      city: evt.target.elements["city"].value,
      country: evt.target.elements["country"].value,
      my_image: evt.target.elements["my_image"].value
    }

    console.log("SENDING story data:", storyData)

    const data = await StoryAPI.postStory(storyData)

  
  
    if (data) {
      console.log("RECEIVED data:", data)
      navigate(`/my-stories/${data.id}`)
    }
  }

  
  return (
    <div className="panel">
      <center>
      <form onSubmit={ handleCreateStory } method="POST">
        <div className="row">
          <label>New Story:&nbsp;</label>
          <input name="story_title" placeholder="enter title of your story"/>
          <textarea id="textbox" name="description" placeholder="tell us your story" />
          <input name="location" placeholder="location i.e. pond, lake, home, cemetary"/>
          <input name="state" placeholder="state"/>
          <input name="city" placeholder="city"/>
          <input name="country" placeholder="country"/>
          <input name="my_image" placeholder="Input a link to your image here" />
          <button id="postme" type="submit" >Post My Story to All!</button>
        </div>
      </form>
      </center>
    </div>
  )
}
              
            
