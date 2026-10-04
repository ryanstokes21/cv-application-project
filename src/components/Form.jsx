export default function Form({ setEditMode, setFormData }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data);
    setFormData(formData);
    setEditMode(false);
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <section className="general-info">
          <Input type="text" id="fname" name="firstName" label="First Name:" />
          <Input type="text" id="lname" name="lastName" label="Last Name:" />
          <Input type="tel" id="phone" name="phone" label="Phone:" />
        </section>

        <section className="education">
          <Input type="text" id="school" name="school" label="School:" />
          <Input
            type="text"
            id="title"
            name="title-of-study"
            label="Title 0f Study:"
          />
          <Input
            type="date"
            id="date"
            name="date-of-study"
            label="Date of Study:"
          />
        </section>

        <section className="experience">
          <Input type="text" id="company" name="company" label="Company:" />
          <Input type="text" id="position" name="position" label="Position:" />
          <Input
            type="text"
            id="responsibilities"
            name="responsibilities"
            label="Responsibilities:"
          />
          <Input
            type="date"
            id="date-from"
            name="dateFrom"
            label="Date From:"
          />
          <Input type="date" id="date-to" name="dateTo" label="Date To:" />
        </section>

        <section className="action">
          <button className="primary-btn" type="submit">
            Submit
          </button>
        </section>
      </form>
    </section>
  );
}

function Input({ type, id, label, name }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} />
    </div>
  );
}
