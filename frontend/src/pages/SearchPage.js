import {useState, useEffect} from "react";
import StoryAPI from "../api/StoryAPI";
import { useNavigate } from "react-router-dom";
import StoryFaves from "../components/StoryFaves";




export default function SearchPage(props) {
    const [search, setNewSearch] = useState([]);

    const navigate = useNavigate()
    const handleSearchChange = async (evt) => {
        evt.preventDefault()
        const searchData = evt.target.elements["search"].value
        const data = await StoryAPI.getStoryBySearch(searchData ? searchData : "Please search again");
        console.log("GETTING search data:", data)
        setNewSearch(data ? data : [])
        if (data) {
            console.log("RECEIVED data:", data)
            navigate('/stories/')
          }
        }
    
    console.log("WHAT IS THIS???", search)

    const renderSearches = () => {
        return search.map((myStory) => {
          return <StoryFaves key={ myStory.id } myStory={ myStory } />
      })
    }
    return (
        <div>
            <center>
        <form id="searchbar" onSubmit={handleSearchChange}>
            <input name="search" type="search" placeholder="Search by City, State"/>
            <button id="searchButton" type="submit">Search</button>
        </form>
        <h2>Stories</h2>
        { renderSearches() }
       
        </center>
        </div>
    )
    }
