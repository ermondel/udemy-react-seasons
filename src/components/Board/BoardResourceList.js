import React from 'react';
import useResources from './useResources';
import BoardCommentList from './BoardCommentList';
import BoardTodosList from './BoardTodosList';
import LoadingBarMain from '../LoadingBarMain';
import Error5xx from '../Error5xx';

const BoardResourceList = ({ resource }) => {
  const resources = useResources(resource);

  let content = null;

  if (resources.status === '1xx') {
    content = <LoadingBarMain />;
  }

  if (resources.status === '5xx') {
    content = <Error5xx />;
  }

  if (resources.status === '2xx' && resource === 'comments') {
    content = <BoardCommentList list={resources.data} />;
  }

  if (resources.status === '2xx' && resource === 'todos') {
    content = <BoardTodosList list={resources.data} />;
  }

  return (
    <div className='content'>
      <div className='content-wrap'>
        <h2>{resource}</h2>
        {content}
      </div>
    </div>
  );
};

export default BoardResourceList;
