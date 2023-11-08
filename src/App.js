import React, { useState } from 'react';
import "./App.css"
import {Header} from './Header';
import {DestinationList} from './DestinationList'
import DestinationCard from './DestinationCard';  

function App() {

  const [DestinationCards, updateDestinationCard] = useState([
    {imgUrl: 'https://vrindavanmathura.com/wp-content/uploads/elementor/thumbs/prem-mandir-temple-vrindavan-mathura-india-prem-mandir-temple-is-maintained-by-jagadguru-kripalu-parishat-international-non-profit-educational-spiritual-charitable-trust-1-pw397u7i1zoeif2pjbq88xejb64wo8fhoeuipdzpfg.jpg',
     imgName : "Vrindavan",
     id: 1},
     {imgUrl: 'https://www.tourmyindia.com/states/kerala/image/kerala-tourism.webp',
     imgName : "Kerala",
     id: 2},
     {imgUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1',
     imgName : "Goa",
     id: 3},
     {imgUrl: 'https://img.veenaworld.com/wp-content/uploads/2023/03/10-Things-That-Make-Pondicherry-An-Unforgetful-Travel-Destination.jpg',
     imgName : "Pondicherry",
     id: 4},
     {imgUrl: 'https://miro.medium.com/v2/resize:fit:780/1*8Pt72wtBOeEeOEUnyaZfTw.jpeg',
     imgName : "leh-ladakh",
     id: 5},
    ])

  return (
    <>
    <Header />
    <DestinationList />
    { DestinationCards.map( (item,i) => {
      console.log(item)
      return <DestinationCard URL = { item.imgUrl } Name = { item.imgName } id = {item.id}/>

    })}
    </>
  );
}
export default App;
