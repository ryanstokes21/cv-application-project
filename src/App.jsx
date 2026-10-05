import Form from './components/Form.jsx';
import Resume from './components/Resume.jsx';
import './App.css';
import { useState } from 'react';

function App() {
  const [editMode, setEditMode] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    school: '',
    title: '',
    date: '',
    company: '',
    position: '',
    responsibility: '',
    dateFrom: '',
    dateTo: '',
  });

  return (
    <>
      {editMode ? (
        <section className="edit">
          <h1>Resume Form</h1>
          <Form
            setEditMode={setEditMode}
            setFormData={setFormData}
            formData={formData}
          />
        </section>
      ) : (
        <section className="resume">
          <h1>Resume</h1>
          <Resume
            formData={formData}
            setFormData={setFormData}
            setEditMode={setEditMode}
          />
        </section>
      )}
    </>
  );
}

export default App;
