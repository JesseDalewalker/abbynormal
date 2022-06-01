import React, { useState, useEffect } from 'react';


const restEndpoint = "https://newsapi.org/v2/everything?q=paranormal&apiKey=05999ea466264bcba4bf898dd8c2774d";

const callRestApi = async () => {
    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    // return JSON.stringify(jsonResponse);
    const arrayOfLists = jsonResponse.articles.map(
      article => <div><hr/><li key={article.id}><b><a target='_blank' rel="noopener noreferrer" href={article.url}>{article.title}</a></b> written by {article.author} </li><hr/></div>
      )
    return arrayOfLists
  };

function Paranews() {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
      callRestApi().then(
          result => setApiResponse(result));
  },[]);

  return(
      <div>
          <h1>News that brings in the paranormal...</h1>
          <ul>{apiResponse}</ul>
      </div>
  );
};



export default Paranews;