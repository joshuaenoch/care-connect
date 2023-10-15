// grey line popping up on phone view when clicking the text box?

import React, { useState } from 'react';

export default function JournalPage() {
  const [text, setText] = useState(''); // State to store the currently typed text
  const [entries, setEntries] = useState([]); // State to store the list of text entries

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveEntry = () => {
    if (text.trim() !== '') {
      const timestamp = new Date().toLocaleDateString(); // Get the current date without time
      setEntries([...entries, { text, timestamp }]); // Add text and timestamp to the list of entries
      setText(''); // Clear the input box
    }
  };

  return (
    <div className="container">
      <div style={{ fontSize: "20px", marginTop: "10px", marginBottom: "20px" }}>
        What's on your mind today?
      </div>
      <textarea
        rows="4"
        cols="35"
        value={text}
        onChange={handleTextChange}
        placeholder="Type your thoughts here"
      ></textarea>
      <button
        style={{ backgroundColor: "darkblue", color: "white", marginTop: "10px", marginBottom: "10px" }}
        onClick={handleSaveEntry}
      >
        Save Entry
      </button>
      <div>
        <h2 style={{ marginTop: "10px", textAlign: "center" }}>Past thoughts:</h2>
        <ul>
          {entries.map((entry, index) => (
            <li style={{marginTop:"10px", textAlign:"center"}} key={index}>
              {entry.text} - {entry.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
