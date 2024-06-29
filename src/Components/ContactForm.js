import React from 'react';
import './FormStyles.css';

const ContactForm = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "530278a5-61b4-401b-9e77-8d21a95a3a59");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Email sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("Email failed to send. Please try again later.");
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" required />

        <label>Your Email</label>
        <input type="email" name="email" required />

        <label>Subject</label>
        <input type="text" name="subject" required />

        <label>Message</label>
        <textarea name="message" rows="6" required />

        <button type="submit" className="btn">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default ContactForm;
