import { useState } from 'react';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';

const IssueForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');
  const [issue, setIssue] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const [issuesArray, setIssuesArray] = useState([]);

  const validate = () => {
    const validationErrors = [];

    if (!name) validationErrors.push('Please Provide a Name');
    if (!email) validationErrors.push('Please Provide an Email');
    if (!issue) validationErrors.push('Please State Your Issue');
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();

    if (errors.length > 0) {
      setValidationErrors(errors);
    } else {
      const newIssue = {
        id: nanoid(),
        date: format(new Date(), 'MM/dd/yyyy'),
        name,
        email,
        level,
        issue
      };
      setIssuesArray([newIssue, ...issuesArray]);
      handleInputReset();
    }
  };

  const handleInputReset = () => {
    setName('');
    setEmail('');
    setLevel('');
    setIssue('');
    setValidationErrors([]);
  };

  return (
    <div>
      {validationErrors.length > 0 &&
        validationErrors.map((error, idx) => (
          <div style={{ color: 'red' }} key={error}>
            {idx + 1}: {error}
          </div>
        ))}
      <h2>Make A Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='level'>Urgency Level:</label>
          <select
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            name='level'
          >
            <option value='' disabled>
              Select
            </option>
            <option value='urgent'>Urgent</option>
            <option value='not urgent'>Not Urgent</option>
          </select>
        </div>
        <div>
          <label htmlFor='issue'>Issue:</label>
          <br />
          <textarea
            value={issue}
            onChange={(event) => setIssue(event.target.value)}
            rows='10'
            cols='50'
          ></textarea>
        </div>

        <button type='submit'>Submit</button>
      </form>

      <hr />
      <h2>List of Issues:</h2>
      {issuesArray.length > 0 &&
        issuesArray.map((text) => (
          <div key={text.id}>
            <p>Id: {text.id}</p>
            <p>Date: {text.date}</p>
            <p>Name: {text.name}</p>
            <p>Level: {text.level}</p>
            <p>Issue: {text.issue}</p>
          </div>
        ))}
    </div>
  );
};

export default IssueForm;
