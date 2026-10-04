import Form from './components/Form.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const [editMode, setEditMode] = useState(true);
  const [input, setInput] = useState('');

  return (
    <>
      {editMode ? (
        <section className="edit">
          <h1>Resume Form</h1>
          <Form setEditMode={setEditMode} setInput={setInput} />
        </section>
      ) : (
        <section className="resume">
          <h1>Resume</h1>
        </section>
      )}
    </>
  );
}

export default App;
