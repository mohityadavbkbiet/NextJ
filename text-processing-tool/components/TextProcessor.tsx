import { useState } from 'react';

const TextProcessor = () => {
  const [inputText, setInputText] = useState('');
  const [processedText, setProcessedText] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/processText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: inputText }),
    });
    const data = await response.json();
    setProcessedText(data.processedText);
  };

  return (
    <div>
      <h1>Text Processing Tool</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here"
          required
        />
        <button type="submit">Process Text</button>
      </form>
      <h2>Processed Text:</h2>
      <p>{processedText}</p>
    </div>
  );
};

export default TextProcessor;
