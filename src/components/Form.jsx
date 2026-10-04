export default function Form({ setInput, setEditMode }) {
  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <section className="form">
      <form>
        <section className="general-info">
          <div className="form-group">
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" onClick={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" onClick={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" onClick={handleChange} />
          </div>
        </section>

        <section className="education">
          <div className="form-group">
            <label htmlFor="school">School:</label>
            <input type="text" id="school" onClick={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="title">Title of Study:</label>
            <input type="text" id="title" onClick={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date of Study:</label>
            <input type="text" id="date" onClick={handleChange} />
          </div>
        </section>

        <section className="experience">
          <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" onClick={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input type="text" id="position" onClick={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="responsibilities">Responsibilities:</label>
            <input type="text" id="responsibilities" onClick={handleChange} />
          </div>

          <div className="date-section">
            <div className="form-group">
              <label htmlFor="date-from">Date From:</label>
              <input type="date" id="date-from" onClick={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="date-to">Date To:</label>
              <input type="date" id="date-to" onClick={handleChange} />
            </div>
          </div>
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
