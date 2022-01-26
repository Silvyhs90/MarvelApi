import styled from "styled-components"
import React from 'react'
import axios from 'axios'
import {Characters} from '../../components/Characters'
import {Search} from '../../components/Search'
import portada from "../../images/portada.jpg"


export const Home = ({searchItem}) => {
  
  const [characters, setCharacters] = React.useState([]);
  

  React.useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=18461a0b621645afee766b2f79cdef0c&hash=51d43a3f7242f048749cfd82b8cc25f4`)
    .then((res) => {
        console.log(res.data.data.results)
        setCharacters(res.data.data.results)
    }).catch((error) => {
        console.log(error)
    })
}, [])


  return (
    <HomePage>
      <Wrapper>
        <div className="container-fluid">
          <img src={portada} className="imagen-portada" alt="portada" />
        </div>
        <Search searchItem={searchItem}/>
        <div className="movie-container">
        {characters.length > 0 && characters.map((char) => <Characters key={char.id} {...char}/>)}
        </div>
    </Wrapper>
    </HomePage>

      );
};



const HomePage = styled.div`
display:block; 
display:inline-block;
background-color: #000000;
flex-wrap: wrap;
`


const Wrapper= styled.div`
display:block; 
display:inline-block;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`