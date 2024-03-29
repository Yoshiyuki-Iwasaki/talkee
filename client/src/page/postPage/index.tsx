import React, { FC } from 'react';
import PostItem from '../../components/molecules/postItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectsTasks } from '../../slice/task/selector';
import { appActions } from '../../slice/task';
import { HeadBlock } from '../../components/organisms/head';

const PostPage: FC = () => {
  const postData = useSelector(selectsTasks);
  const dispatch = useDispatch();
  const handleLike = (data: any) => {
    dispatch(appActions.likeTask(data));
  };
  return (
    <>
      <HeadBlock
        title="投稿ページのタイトルです"
        description="投稿ページの説明文です"
        path="post"
      />
      <ul>
        <PostItem
          removeFlag={false}
          postData={postData[0]}
          handleLike={handleLike}
        />
      </ul>
    </>
  );
};

export default PostPage;
