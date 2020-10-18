import React from "react";

import File from "../../atoms/File"
const array = [
  {
    url: "overwatch",
    name: "Overwatch",
    value: "https://battlenet://",
    isLink: true
  },
  {
    url: "fortnite",
    name: "Fortnite",
    value: "https://www.epicgames.com/fortnite/ko/home",
    isLink: true,
  },
  {
    url: "minecraft",
    name: "Minecraft",
    value: "https://www.minecraft.net/ko-kr",
    isLink: true,
  },
  {
    url: "valorant",
    name: "Valorant",
    value: "https://playvalorant.com/ko-kr/",
    isLink: true,
  },
  {
    url:"paladins",
    name: 'Paladins',
    value:"https://www.paladins.com/",
    isLink:true
  },
  {
    url:"pubg",
    name: 'PLAYERUNKNOWN\'S BATTLEGROUNDS',
    value:"https://www.pubg.com/",
    isLink:true
  },
  {
    url:"steam",
    name: 'Steam',
    value:"https://store.steampowered.com/",
    isLink:true
  }

]
const Mygames = (props) => {
  return (
    <File title="My Games" arrays={array} >
    </File>
   );
};
export default Mygames;
