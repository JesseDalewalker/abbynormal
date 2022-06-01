import { Link } from "react-router-dom"
import StoryAPI from "../api/StoryAPI";
import icon from "../icons8-back-32.png"


function StoryDetail(props) {

  // router params

  // event handlers
  const handleDeleteStory = async () => {
    const data = await StoryAPI.deleteStoryById(props.myStory.id) // this is to remove the data from the Django API
    if (data) {
      props.removeStory(props.myStory.id) // this is just to remove the data from the parent (nothing to do with the Django API)
    }
  }

return (
  
 
  <section className="day-events new">
    


    <div className="wrapper">
      <div className="day-card">
        <input type="checkbox" id={ props.myStory.id } className="more" aria-hidden="true"/>
            <div className="content">
                <div className="front">
                    <div className="inner">
                       <Link key={ props.myStory.id } to={ `/my-stories/${ props.myStory.id }` }> <h2 className="story-title">{props.myStory.story_title}</h2> </Link>
                        
                        
                            <label htmlFor={ props.myStory.id } className="button" aria-hidden="true">
                               Curious?
                           </label>
                       </div>
                   </div>
                   <div className="back" style={{ backgroundImage: `url(${props.myStory.my_image})` }}>
                      
                       <div className="inner">
                           <div className="info">
                               <span>{ props.myStory.city}</span>
                               <div className="icon">
                                   <i className="fas fa-users"></i>
                                   <span>City</span>
                               </div>
                           </div>
                           <div className="info">
                               <span>{props.myStory.state}</span>
                               <div className="icon">
                                   <i className="fas fa-door-open"></i>
                                   <span>State</span>
                               </div>
                           </div>
                           <div className="info">
                               <span>{props.myStory.location} </span>
                               <div className="icon">
                                   <i className="fas fa-bed"></i>
                                   <span>Location</span>
                               </div>
                           </div>
                           <div className="info">
                               <span>{props.myStory.country}</span>
                               <div className="icon">
                                   <i className="fas fa-bath"></i>
                                   <span>Country</span>
                               </div>
                           </div>
                           <div className="description">
                               <p>{props.myStory.description}</p>
                                <Link to={`/my-stories/${props.myStory.id}`}> <button className="btn-update">EDIT</button></Link>
                               <button className="btn-delete" onClick={ handleDeleteStory }>DELETE</button>

                           </div>

                           
                           <label htmlFor={ props.myStory.id } className="button return" aria-hidden="true">
                               <i className="arrow-left"><img src={icon}/></i>
                           </label>
                       </div>
                   </div>
               </div>
           </div>
           </div>
       
           </section>
            
)
}

export default StoryDetail;
           