import React from 'react'
import styled from 'styled-components'


export const Comics = ({thumbnail, title, urls,series,modified}) => {


    return (
        <Header>
            <a href={`${urls[0].url}`} target="_blank" rel='noreferrer'>
             <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} className="card-img-top"/>
             </a>
        <Wrapper>
            <div className="container">
                <h4>{title}</h4>
                <h4>{modified}</h4>
            <View>
                <span>Series:   {`${series.name}`}</span>
            </View>
            </div>
        </Wrapper>

        </Header>


    );
};

const Header = styled.div`
    width:400px;
    background-color: #00000;
    margin:1rem;
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0,0,0.1);
    position:relative;
    padding-bottom: 3px;
    overflow: scroll;
    float:left; 

    &:hover{
            transform:translateY(0%)
    }
   
    img{
        max-width: 100%;
        height: 380px;
        object-fit:contain;
    }
`
const Wrapper= styled.div`

        display:flex;
        padding:1rem;
        justify-content: space-between;
        transition: transform 0.3s ease-in-out;

        
        &:hover{
            transform:translateY(-8px)
    }

    span{
        margin:0;
    }

`

const View = styled.div`
        color:black;
        background-color:white;
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        padding:1rem;
        transform: translateY(100%);
        max-height:100%;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

`