import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { postAdd } from '../reducers/postReducer';
import styles from './PostInput.module.css';

const PostInput = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: nanoid(),
      userId: nanoid(),
      title,
      body
    };

    dispatch(postAdd(post));
    handleReset();
  };

  const handleReset = () => {
    setTitle('');
    setBody('');
  };

  return (
    <div className={styles.inputBox}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          value={title}
          placeholder="Title"
        />
        <textarea
          onChange={(e) => {
            setBody(e.target.value);
          }}
          value={body}
          name="body"
          placeholder="Add Your Entry"
        ></textarea>
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default PostInput;
