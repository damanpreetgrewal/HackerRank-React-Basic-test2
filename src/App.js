import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

const App = ({ articles }) => {
  const [posts, setPosts] = useState(articles);

  const [firstLoad, setFirstLoad] = useState(true);

  const sortByVote = useCallback(() => {
    const sortedArticlesByVote = articles.sort((a, b) => b.upvotes - a.upvotes);
    console.log('sortedArticlesByVote', sortedArticlesByVote);
    setPosts(prevState => {
      return [...sortedArticlesByVote];
    });
  }, [articles]);

  useEffect(() => {
    if (firstLoad) {
      sortByVote();
      setFirstLoad(false);
    }
  }, [firstLoad, sortByVote, setFirstLoad]);

  const sortByRecent = () => {
    const sortedArticlesByDate = articles.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    console.log('sortedArticlesByDate', sortedArticlesByDate);
    setPosts(prevState => {
      return [...sortedArticlesByDate];
    });
  };

  return (
    <div className='App'>
      <h8k-navbar header={title}></h8k-navbar>
      <div className='layout-row align-items-center justify-content-center my-20 navigation'>
        <label className='form-hint mb-0 text-uppercase font-weight-light'>
          Sort By
        </label>
        <button
          data-testid='most-upvoted-link'
          className='small'
          onClick={sortByVote}
        >
          Most UpVoted
        </button>
        <button
          data-testid='most-recent-link'
          className='small'
          onClick={sortByRecent}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={posts} />
    </div>
  );
};

export default App;
