import React, { useState } from 'react';

export default function JournalPage() {
  const initialEntries = [
    { text: "Today I went with Dorothy to walk around the park", timestamp: "09/13/2023" },
    { text: "I think my granddaughter gave me too much of my meds", timestamp: "09/11/2023" },
    { text: "Another sorry day without a ray of sunshine", timestamp: "09/6/2023" },
    { text: "Today I played bingo at the mall with my granddaughter", timestamp: "09/4/2023" },
    { text: "My nephew recommended me this app", timestamp: "09/2/2023" },
  ];

  const [text, setText] = useState('');
  const [entries, setEntries] = useState(initialEntries);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveEntry = () => {
    if (text.trim() !== '') {
      const timestamp = new Date().toLocaleDateString();
      setEntries([{ text, timestamp }, ...entries]);
      setText('');
    }
  };

  return (
    <div className="container">
      <div style={{ fontSize: "20px", marginTop: "40px", marginBottom: "20px" }}>
        What's on your mind today?
      </div>
      <textarea
        rows="4"
        cols="35"
        value={text}
        onChange={handleTextChange}
        placeholder="Type a journal entry here..."
      ></textarea>
      <button
        style={{ backgroundColor: "darkblue", color: "white", marginTop: "10px", marginBottom: "10px" }}
        onClick={handleSaveEntry}
      >
        Save Entry
      </button>
      <div>
        <h2 style={{ marginTop: "25px", textAlign: "center" }}>Past entries:</h2>
        <ul>
          {entries.map((entry, index) => (
            <li style={{ marginTop: "10px", textAlign: "center", fontStyle: "italic" }} key={index}>
              {entry.text} - {entry.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
