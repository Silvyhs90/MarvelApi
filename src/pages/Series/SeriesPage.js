import styled from "styled-components"
import React from 'react'
import axios from 'axios'
import {Series} from '../../components/Series'
import {SearchSeries} from '../../components/SearchSeries'
import portada from "../../images/portada.jpg"


export const SeriesPage = ({searchItem}) => {
  

  const [series, setSeries] = React.useState([]);



  React.useEffect(() => {
    axios.get(`https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=18461a0b621645afee766b2f79cdef0c&hash=51d43a3f7242f048749cfd82b8cc25f4`)
    .then((res) => {
      console.log(res.data.data.results)
      setSeries(res.data.data.results)
    }).catch((error) => { 
      console.log(error)
  })
}, []);


  return (
    <HomePage>
      <Wrapper>
      <div className="container-fluid">
          <img src={portada} className="imagen-portada" alt="portada" />
        </div>
        <SearchSeries searchItem={searchItem}/>
        <div className="movie-container">
        {series.length > 0 && series.map((serie) => <Series key={serie.id} {...serie}/>)}
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