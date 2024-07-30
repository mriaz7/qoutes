import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomQuote = ({ onSaveQuote }) => {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      const quotes = response.data;
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    } catch (error) {
      console.error("There was an error fetching the quotes!", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="section1">
      <h2>Random Quote</h2>
      {quote && (
        <div className="quote1">
          <p className="quoteText">{quote.text}</p>
          <p className="quoteAuthor">- {quote.author}</p>
          <button onClick={() => onSaveQuote(quote)} className="button">Save</button>
          <button onClick={fetchQuote} className="button">Reload Quote</button>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
