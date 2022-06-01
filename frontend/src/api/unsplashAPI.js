import React, { useState, useEffect } from 'react';
import AddImage from '../components/addImage';
// import ReactDOM from 'react-dom';
// import AddImage from '../components/addImage';

const restEndpoint = "https://api.unsplash.com/search/photos?page=1&per_page=100&client_id=E4ErKkomIwNnM2IpttR3aF2O8P0Zzgr_fTKAlOAq19U&query=paranormal";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    // return JSON.stringify(jsonResponse);
    const arrayOfLists = jsonResponse.results.map(
      result => <div id="unsplash2"><br/><li  key={result.id}>
          
          <a target='_blank' rel="noopener noreferrer" href={result.links.download}>
            <img src={result.urls.thumb} alt={result.alt_description}/>
            </a></li>
            <br/><p>image by {result.user.name}</p>
            <button className="btn-copy" onClick={() =>  navigator.clipboard.writeText(result.links.download)}
          >
            Copy
          </button>
          </div>
    )
    return arrayOfLists
  };

function ParaImages() {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);

  return(
      <div className='imageSize'>
        <center>
          <AddImage />
          <h1>Some images that may make you question reality...</h1>
          <ul id="unsplash" >{apiResponse}</ul>
          </center>
      </div>
  );
};



export default ParaImages;


