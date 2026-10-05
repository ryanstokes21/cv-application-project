export default function Resume({ formData, setEditMode }) {
  function handleClick() {
    setEditMode(true);
  }

  return (
    <section>
      <div>
        <h2>
          {formData.firstName} {formData.lastName}
        </h2>
        <p>{formData.phone}</p>
      </div>

      <div>
        <p>{formData.school}</p>
        <p>{formData.title}</p>
        <p>{formData.date}</p>
      </div>

      <div>
        <p>{formData.company}</p>
        <p>{formData.position}</p>
        <p>{formData.responsibilities}</p>
        <p>
          {formData.dateFrom} to {formData.dateTo}
        </p>
      </div>

      <button className="primary-btn" onClick={handleClick}>
        Edit
      </button>
    </section>
  );
}
