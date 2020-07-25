import React from 'react';

import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";

import './App.css';
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>
      <Row
        title={"Trending Now"}
        fetchUrl={requests.fetchTrending}/>
      <Row
        title={"Top Rated"}
        fetchUrl={requests.fetchTopRated}/>
      <Row
        title={"Action Movies"}
        fetchUrl={requests.fetchActionMovies}/>
      <Row
        title={"Comedy Movies"}
        fetchUrl={requests.fetchComedyMovies}/>
      <Row
        title={"Documentaries"}
        fetchUrl={requests.fetchDocumentaries}/>
      <Row
        title={"Horror Movies"}
        fetchUrl={requests.fetchHorrorMovies}/>
      <Row
        title={"Romance Movies"}
        fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
