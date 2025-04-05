import { useState } from "react"
import Card from "./Components/Card";

function App() {
  const[count, setCount] = useState(0);
  return (
    < >
      <div className="max-w-[1120px] h-[100vh] m-auto flex flex-col items-center justify-center">
        <p className="bg-amber-600 py-3 px-5 rounded-2xl mb-3">count:{count}</p>
        <div className="flex gap-4">
          <button 
              className=" bg-amber-200 py-3 px-5 rounded-2xl text-black hover:bg-green-300"  
              onClick={()=>count >= 20 ? setCount(count) : setCount(count + 1)}>
              Add Value
          </button>
          <button
              className=" bg-amber-200 py-3 px-5 rounded-2xl text-black hover:bg-green-300" 
              onClick={()=>count >= 1 ? setCount(count-1): setCount(0)}>
              Remove
          </button>
        </div>
      </div>
      
      <div className="max-w-[1120px] m-auto h-auto gap-10 flex flex-wrap">
        <Card 
          card1="Card 1" 
          price = "400"
          imagesrc = "https://media.istockphoto.com/id/1092081824/vector/mobile-payment-concept-smartphone-with-processing-of-mobile-payments-from-credit-card-vector.jpg?s=612x612&w=0&k=20&c=3dEctGnGoX4TROIzOhBZZlCxkwCnTd3WAimmyZ29g6w="
        />
        <Card 
          card1="Card 2"
          price = "500"
          imagesrc = "https://www.shutterstock.com/image-photo/white-headphones-wireless-earphones-isolated-260nw-1679626627.jpg"

        />
        <Card
          card1="Card 3" 
          price = "1000"
          imagesrc="https://cdn1.vectorstock.com/i/1000x1000/99/85/headphone-black-music-earphone-or-gaming-headset-vector-35439985.jpg"
         />
        <Card 
        card1="Card 5" 
        price = "200"
        imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NyH2fX8QjvRxlzVUSyI_upSDNsebDSvW3w&s"
        />
        <Card 
        card1="Card 6" 
        price = "600"
        imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxQHX-x62C7-2IzGYn6cW9IcYuXnrPF7Vmwg&s"
        />
        <Card 
        card1="Card 7" 
        price = "300"
        imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9dYHT_sFLuvPgcT7bDcRpsFaUYl2pZbgoCb5H_68sijR2SgjupL82Jwo-AJEXHyv2H4&usqp=CAU"
        />
        
      </div>
    </>
  )
}

export default App
