import React, { useEffect, useState } from 'react';
import RandomQuote from './RandomQuote';
import SavedQuotes from './SavedQuotes';

const Home = () => {
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    setSavedQuotes(saved);
  }, []);

  const saveQuote = (quote) => {
    const newSavedQuotes = [...savedQuotes, quote];
    setSavedQuotes(newSavedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(newSavedQuotes));
  };

  const deleteQuote = (index) => {
    const newSavedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(newSavedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(newSavedQuotes));
  };

  const editQuote = (index, newText) => {
    const newSavedQuotes = savedQuotes.map((quote, i) => {
      if (i === index) {
        return { ...quote, text: newText };
      }
      return quote;
    });
    setSavedQuotes(newSavedQuotes);
    localStorage.setItem('savedQuotes', JSON.stringify(newSavedQuotes));
  };

  return (
    <div className="container">
      <RandomQuote onSaveQuote={saveQuote} />
      <SavedQuotes savedQuotes={savedQuotes} onDeleteQuote={deleteQuote} onEditQuote={editQuote} />
    </div>
  );
};

export default Home;
