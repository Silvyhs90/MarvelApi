import styled from "styled-components"
import React from 'react'
import axios from 'axios'
import {Characters} from '../../components/Characters'
import {Comics} from '../../components/Comics'
import portada from "../../images/portada.jpg"


export const Home = () => {
  
  const [characters, setCharacters] = React.useState([]);
  const [comics, setComics] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=18461a0b621645afee766b2f79cdef0c&hash=51d43a3f7242f048749cfd82b8cc25f4')
    .then(res => {
      setComics(res.data.data.results)
    }).catch(error => console.log(error))
}, []);

console.log(comics)

  React.useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=18461a0b621645afee766b2f79cdef0c&hash=51d43a3f7242f048749cfd82b8cc25f4')
    .then(res => {
      setCharacters(res.data.data.results)
    }).catch(error => console.log(error))
}, []);


  console.log(characters)

  return (
    <HomePage>
      <Wrapper>
        <div className="imagen-texto">
          <img src={portada} className="imagen-portada img-fluid" alt="portada" />
        </div>
        <h1 className="text-center">CHARACTERS</h1>
        <div className="movie-container">
        {characters.length > 0 && characters.map((char) => <Characters key={char.id} {...char}/>)}
        </div>
        <h1 className="text-center">COMICS</h1>
        <div className="movie-container">
        {comics.length > 0 && comics.map((comic) => <Comics key={comic.id} {...comic}/>)}
        </div>
    </Wrapper>
    </HomePage>

      );
};



const HomePage = styled.div`
display:block; 
display:inline-block;
background-color: #e7101b;
flex-wrap: wrap;
`


const Wrapper= styled.div`
display:block; 
display:inline-block;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`