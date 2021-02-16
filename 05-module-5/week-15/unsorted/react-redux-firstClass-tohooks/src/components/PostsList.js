import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostDetail from './PostDetail';
import { postsFetch } from '../reducers/postReducer';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(postsFetch());
  }, []);

  return (
    <>
      <ol>
        {posts &&
          posts.map(({ title, id }) => <PostDetail key={id} title={title} />)}
      </ol>
    </>
  );
};
export default PostsList;
