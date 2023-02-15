import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import RIcon from '../molecules/RegularIcon';

const menuLists = [
  {
    key: 'My Profile',
    icon: 'file',
  },
  {
    key: 'School',
    icon: 'file',
  },
  {
    key: 'My Projects',
    icon: 'file',
  },
  {
    key: 'My Games',
    icon: 'game',
  },
  {
    key: 'Recycle Bin',
    icon: 'Trash',
  },
];

const ListItem = props => {
  const url = '/icons/' + props.icon + '.png';
  return (
    <ListContainer>
      <ListIcon src={url} style={{ width: '20px', height: '20px' }}></ListIcon>
      <ListName>{props.name}</ListName>
    </ListContainer>
  );
};
const FileList = props => {
  return (
    <Links to={props.link} cL={props.cL} id={props.id}>
      <ListItem name={props.name} icon={props.icon}></ListItem>
    </Links>
  );
};

const File = props => {
  const arr = props.arrays;
  const [currentList, setCurrentList] = useState();
  useEffect(() => {
    var i;
    for (i = 0; i < menuLists.length; i++) {
      if (menuLists[i].key === props.title) {
        setCurrentList(i);
        console.log(currentList);
      }
    }
  });
  return (
    <Container>
      <Title>{props.title}</Title>
      <Body>
        <MenuContainer>
          {menuLists.map((ml, index) => (
            <FileList
              link={ml.key}
              name={ml.key}
              icon={ml.icon}
              cL={currentList}
              id={index}
            />
          ))}
        </MenuContainer>
        <ContentsContainer>
          {arr.map(i => (
            <RIcon
              url={i.url}
              name={i.name}
              value={i.value}
              FileIcon
              isFullScreen={i.isFullScreen}
              isLink={i.isLink}
            ></RIcon>
          ))}
        </ContentsContainer>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
`;
const Title = styled.div`
  height: 40px;
  line-height: 40px;
  background-color: #f5f6fa;
  text-align: center;
  font-size: 1.5em;
  border: 2px solid #dfe6e9;
`;
const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
const MenuContainer = styled.div`
  @media (max-width: 800px) {
    width: 40%;
  }
  display: flex;
  width: 50%;
  min-width: 80px;
  max-width: 260px;
  border-right: 2px solid #dfe6e9;
  background-color: #f5f6fa;
  flex-direction: column;
`;
const ListContainer = styled.div`
  @media (max-width: 400px) {
    flex-direction: column;
  }

  display: flex;
  flex-direction: row;
  text-align: center;
`;
const ListIcon = styled.img`
  @media (max-width: 400px) {
    margin: auto auto;
  }
  margin: auto 10px;
`;
const ListName = styled.div`
  color: black;
  word-break: break-all;

  text-decoration: none;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  align-content: flex-start;
`;
const Links = styled(Link)`
  text-decoration: none;
  padding: 5px;
  background-color: ${props =>
    props.cL === props.id ? 'rgba(52, 152, 219, 0.4)' : ''};
  border: ${props =>
    props.cL === props.id
      ? '1px solid rgba(51, 152, 219, 1)'
      : '1px solid rgba(0, 0, 0, 0)'};

  &:hover {
    background-color: ${props =>
      props.cL !== props.id ? 'rgba(51, 152, 219, 0.21)' : ''};
  }
`;

export default File;
