import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import RIcon from "../molecules/RegularIcon"

const ListItem = (props) =>{
    const url = "/icons/" + props.icon + ".png";
    return(
        <ListContainer>
        <ListIcon src={url} style={{ width:"20px", height:"20px"}}></ListIcon>
        <ListName>{props.name}</ListName>
        </ListContainer>
    )
}
const FileList = (props) =>{
    return(
        <Links to={props.link}>
            <ListItem name={props.name} icon={props.icon}></ListItem>
        </Links>
    );
}
const File = (props) => {
    const arr = props.arrays;
    return(
        <Container>   
            <Title>{props.title}</Title>
            <Body>
                <MenuContainer>
                    <FileList link = "/MyProfile" name="MyProfile" icon="file"/>
                    <FileList link = "/MyProjects" name="My Projects" icon="file"/>
                    <FileList link = "/RecycleBin" name="Recycle Bin" icon="Trash"/>
                </MenuContainer>
                <ContentsContainer>
                    {arr.map((i)=>(
                    <RIcon url={i.url} name={i.name} value={i.value} FileIcon isFullScreen={props.isFullScreen}></RIcon>
                    ))}
                </ContentsContainer>
            </Body>
        </Container>    
   );
};

const Container = styled.div`
    display:flex;
    height:100vh;
    flex-direction:column;
`;
const Title = styled.div`
    height:40px;
    line-height:40px;
    background-color:grey; 
    text-align:center;
`;
const Body = styled.div`
    display:flex;
    flex:1;
    flex-direction:row;
`;
const MenuContainer =styled.div`
    @media (max-width: 800px){
       width:40%;
    }
    display:flex;
    width:50%;
    min-width: 80px;
    max-width: 260px;
    background-color:yellow;
    flex-direction:column ;
`;
const ListContainer = styled.div`
    @media (max-width: 400px){
        flex-direction:column;
    }
    display:flex;
    flex-direction:row;
    text-align:center;
`;
const ListIcon = styled.img`
    @media (max-width:400px){
        margin: auto auto;
    }
    margin: auto 10px;
`;
const ListName = styled.div`
    color:black;
    text-decoration: none;
    word-break:break-all;
`;
const ContentsContainer = styled.div`
    display: flex;
    flex-direction:row;
    flex-flow : wrap;
    align-content: flex-start;
`;
const Links = styled(Link)`
    text-decoration:none;
    padding: 5px;
    margin-top: 4px;
    background-color: lightgray;
`;

export default File;