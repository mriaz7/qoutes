import React, { useState } from 'react';

const SavedQuotes = ({ savedQuotes, onDeleteQuote, onEditQuote }) => {
  const [editingQuote, setEditingQuote] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleEditQuote = (index) => {
    setEditingQuote(index);
    setEditingText(savedQuotes[index].text);
  };

  const handleSaveEdit = (index) => {
    onEditQuote(index, editingText);
    setEditingQuote(null);
    setEditingText('');
  };

  return (
    <div className="section">
      <h2>Saved Quotes</h2>
      {savedQuotes.map((quote, index) => (
        <div key={index} className="quote">
          {editingQuote === index ? (
            <div>
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="input"
              />
              <button onClick={() => handleSaveEdit(index)} className="button">Save</button>
            </div>
          ) : (
            <div>
              <p className="quoteText">{quote.text}</p>
              <p className="quoteAuthor">- {quote.author}</p>
              <button onClick={() => handleEditQuote(index)} className="button">Edit</button>
              <button onClick={() => onDeleteQuote(index)} className="button">Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SavedQuotes;
