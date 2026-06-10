import { useEffect, useRef, useState } from 'react'
import '../src/output.css'
import Card from './components/Card.jsx'
import Navbar from './components/Navbar.jsx'
const catFactAPIURL = "https://catfact.ninja/fact"
const catImgAPIURL = "https://api.thecatapi.com/v1/images/search"

function App() {

  const [cards, setCards] = useState([])

  const updateFromAPI = async () => {
    let resp = await fetch(catFactAPIURL)
    let respJson = await resp.json()
    let fct = respJson.fact
    resp = await fetch(catImgAPIURL)
    respJson = await resp.json()
    let link = respJson[0].url
    const newData = {
      imgLink: link,
      fact: fct,
      bgColor: `rgb(${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)})`
    }
    console.log(newData)
    setCards([...cards, newData])
  }
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [cards]);

  return (
    <>
      <Navbar/>
      <div className="page flex flex-col w-screen relative">
        <button onClick={async () => { updateFromAPI(cards, setCards) }} className="next bg-purple-800 bottom-3 left-1/2 -translate-x-1/2 font-bold fixed z-10 text-white rounded-[5px] p-5 w-80 text-[30px] shadow-[10px_0px_15px_rgba(0,0,0,0.3)] flex items-center justify-center transition-all hover:bg-purple-600 hover:scale-105 cursor-pointer">Get Cat Fact!</button>
        <div ref={cards} className="w-screen flex justify-center flex-wrap">

          {
            cards.map((card) => {
              return <Card imgLink={card.imgLink} fact={card.fact} bgColor={card.bgColor} />
            })
          }
        </div>
      </div>
      <div ref={bottomRef}></div>
    </>
  )
}

export default App