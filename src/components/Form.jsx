export default function Form({ setEditMode, setFormData, formData }) {
  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <section className="general-info">
          <Input
            type="text"
            id="fname"
            name="firstName"
            label="First Name:"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="lname"
            name="lastName"
            label="Last Name:"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            type="tel"
            id="phone"
            name="phone"
            label="Phone:"
            value={formData.phone}
            onChange={handleChange}
          />
        </section>

        <section className="education">
          <Input
            type="text"
            id="school"
            name="school"
            label="School:"
            value={formData.school}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="title"
            name="titleOfStudy"
            label="Title 0f Study:"
            value={formData.titleOfStudy}
            onChange={handleChange}
          />
          <Input
            type="date"
            id="date"
            name="dateOfStudy"
            label="Date of Study:"
            value={formData.dateOfStudy}
            onChange={handleChange}
          />
        </section>

        <section className="experience">
          <Input
            type="text"
            id="company"
            name="company"
            label="Company:"
            value={formData.company}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="position"
            name="position"
            label="Position:"
            value={formData.position}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="responsibilities"
            name="responsibilities"
            label="Responsibilities:"
            value={formData.responsibilities}
            onChange={handleChange}
          />
          <Input
            type="date"
            id="date-from"
            name="dateFrom"
            label="Date From:"
            value={formData.dateFrom}
            onChange={handleChange}
          />
          <Input
            type="date"
            id="date-to"
            name="dateTo"
            label="Date To:"
            value={formData.dateTo}
            onChange={handleChange}
          />
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

function Input({ type, id, label, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
