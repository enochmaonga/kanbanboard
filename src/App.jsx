import React from "react";
import "./App.css";
import {any} from "react"
import {Row} from 'react'
import {Container} from 'react'



function App() {
// create a card item and set a function for it:
  const [cardItems, setCardItems] = React.useState([
    'To Do', 
    'In Progress', 
    'Testing',
    'Failed',
   
  ])

  const [newCardItems, setNewCardItem] = React.useState("")
//save refence for the dragged item

const dragItem = React.useRef<any>(null)
const dragOverItem = React.useRef<any>(null)

//  Drag Sorting
const handleSort = () => {
  //duplicate items
  let _cardItems = [...cardItems]
  //remove and save gragged item content

const draggedItemContent = _cardItems.splice(dragItem.current, 1)[0]

//switch position
_cardItems.splice(dragOverItem.current, 0, draggedItemContent)

//reset the position
dragItem.current = null
dragOverItem.current = null

//update the actual array
setCardItems(_cardItems)
}
//handle name change
const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setNewCardItem(e.target.value)
}

//handle new item add
const handleAddItem = () => {
  const _cardItems = [...cardItems]
  _cardItems.push(newCardItems)
  setCardItems(_cardItems)
}

  return (
    <div className="app">
      <h2>Kanban Board </h2>
      <div className="input-group">
        <h5>Dashboard ... Kanban</h5>
        <input 
        type="text" 
        name="cardName" 
        placeholder="Item Description" 
        onChange={handleNameChange}
        />
        <button className="btn" onClick={handleAddItem}>
          Add Column
          </button>

          {/* Here is the list container for my To Do component */}
       <div className="list-container">
        {cardItems.map((item, index) => (
          // Adds the drag capacity
            <div 
            key={index} 
            className="list-item" 
            draggable 
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}>
          <i className="fa-solid fa-bars"></i>
          <h3>{item}</h3>
        </div>
          ))} 
        </div>

        <div className="list-container">
        {cardItems.map((item, index) => (
          // Adds the drag capacity
            <div 
            key={index} 
            className="list-item" 
            draggable 
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}>
          <i className="fa-solid fa-bars"></i>
          <h3>{ }</h3>
        </div>
          ))} 
        </div>

        <div className="list-container">
        {cardItems.map((item, index) => (
          // Adds the drag capacity
            <div 
            key={index} 
            className="list-item" 
            draggable 
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}>
          <i className="fa-solid fa-bars"></i>
          <h3>{ }</h3>
        </div>
          ))} 
        </div>
      </div>

   
    </div>
  )
}

export default App

