import React from 'react'
import styled from 'styled-components'


export const Characters = ({thumbnail, name, description}) => {

    return (
        <Header>
             <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className="card-img-top"/>
        <Wrapper>
            <div className="container">
                <h4>{name}</h4>
            <View>
                <h4>{description}</h4>
            </View>
            </div>
        </Wrapper>

        </Header>


    );
};

const Header = styled.div`
    width:300px;
    background-color: #00000;
    margin:1rem;
    border-radius: 4px;
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
        height: 450px;
        object-fit:cover;
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