import axios from 'axios';
import React from 'react'
import styled from 'styled-components'
import { Characters } from './Characters';

export const Search = () => {

    const [searchTerm, seSearchTerm] = React.useState("");
    const [characters, setCharacters] = React.useState([]);

    const handleOnSubmit =(e) => {
        e.preventDefault();

        axios.get(`https://gateway.marvel.com:443/v1/public/characters?name=${searchTerm}&ts=1&apikey=18461a0b621645afee766b2f79cdef0c&hash=51d43a3f7242f048749cfd82b8cc25f4`)
        .then((res) => {
            console.log(res.data.data.results)
            setCharacters(res.data.data.results)
        }).catch((error) => {
            console.log(error)
        })
    };


    const handleOnChange = (e) => {
        seSearchTerm(e.target.value);
        };

    return (
        <HomePage>
         <Wrapper>
        <form onSubmit={handleOnSubmit}>
        <SearchBar
            type="search"
            placeholder="Search Character.." 
            value={searchTerm}
            onChange={handleOnChange}
            />
        </form>
        <div className="movie-container">
            {characters.length > 0 && characters.map((char) => <Characters key={char.id} {...char}/> )}
            </div>
       </Wrapper>
        </HomePage>
    );
};

const HomePage = styled.div`
  display:flex;
  flex-wrap: wrap;
`
    const Wrapper= styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    `
    const SearchBar = styled.input`
    margin-left: auto;
    margin-bottom: 20px;
    margin-top:20px;
    font-size: 1.5rem;
    border:2px solid black;
    padding:0.5rem 1.5rem;
    border-radius:60px;
    border-color:red;
    `;
