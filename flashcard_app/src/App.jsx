import { useState } from 'react'
import "./assets/css/main.css";
import Flashcard from "./Flashcard";
import ListFlashcards from './ListFlashcards';

function App() {

  return (
    <div className="container">
      <Flashcard />
      <ListFlashcards />
    </div>
  )
}

export default App
