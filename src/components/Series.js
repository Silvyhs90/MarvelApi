import React from 'react'
import styled from 'styled-components'


export const Series = ({thumbnail, startYear, endYear, title, urls,description, modified}) => {


    return (
        <Header>
            <a href={`${urls[0].url}`} target="_blank" rel='noreferrer'>
             <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} className="card-img-top"/>
             </a>
        <Wrapper>
            <div className="container">
                <h4>{title}</h4>
                <h4>{description}</h4>
            <View>
            <span>{modified}</span>
                <span>{startYear}</span>
                <span>{endYear}</span>
            </View>
            </div>
        </Wrapper>

        </Header>


    );
};

const Header = styled.div`
    width:280px;
    margin-top:150px;
    margin-left:1.5rem;
    border-radius: 3px;
    box-shadow: 3px 3px 5px rgba(0,0,0.1);
    position:relative;
    padding-bottom: 1px;
    overflow: scroll;
    float:left; 
    background-color: #e7101b;

    &:hover{
            transform:translateY(10%)
    }
   
    img{
        max-width: 100%;
        max-height: 100%;
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
        background-color:#e7101b;
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