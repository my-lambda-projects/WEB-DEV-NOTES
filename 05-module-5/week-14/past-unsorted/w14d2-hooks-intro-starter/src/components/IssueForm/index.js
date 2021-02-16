import { useState } from 'react';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';

const IssueForm = () => {
  return (
    <div>
      <h2>Make A Complaint</h2>
      <form>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='level'>Urgency Level:</label>
          <select name='level'>
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
          <textarea rows='10' cols='50'></textarea>
        </div>

        <button type='submit'>Submit</button>
      </form>

      <hr />
      <h2>List of Issues:</h2>
    </div>
  );
};

export default IssueForm;
