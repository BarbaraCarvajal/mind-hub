import './contact.css';

const Contact = () => {
  return (
    
    <div className="container">
      <br />
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
