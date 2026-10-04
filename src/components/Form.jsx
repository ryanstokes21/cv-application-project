export default function Form({ setEditMode }) {
  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
  }

  return (
    <section className="form">
      <form>
        <section className="general-info">
          <Input type="text" id="fname" label="First Name:" />
          <Input type="text" id="lname" label="Last Name:" />
          <Input type="tel" id="phone" label="Phone:" />
        </section>

        <section className="education">
          <Input type="text" id="school" label="School:" />
          <Input type="text" id="title" label="Title 0f Study:" />
          <Input type="text" id="date" label="Date of Study:" />
        </section>

        <section className="experience">
          <Input type="text" id="company" label="Company:" />
          <Input type="text" id="position" label="Position:" />
          <Input type="text" id="responsibilities" label="Responsibilities:" />
          <Input type="date" id="date-from" label="Date From:" />
          <Input type="date" id="date-to" label="Date To:" />
        </section>

        <section className="action">
          <button className="primary-btn" onClick={handleSubmit}>
            Submit
          </button>
        </section>
      </form>
    </section>
  );
}

function Input({ type, id, label }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
}
