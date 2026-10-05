function JobForm() {
    return (
        <section className="jobform">
        <h2>Add Job Application</h2>
        <form id="jobForm">
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" required />

          <label htmlFor="position">Position:</label>
          <input type="text" id="position" name="position" required />
          
          <label htmlFor="status">Status:</label>
          <select id="status" name="status" required>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>

          <button type="submit">Add Application</button>
        </form>
      </section>
    )
}

export default JobForm