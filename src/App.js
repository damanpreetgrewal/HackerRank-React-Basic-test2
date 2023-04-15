import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

const App = ({ articles }) => {
  const [sortBy, setSortBy] = useState(articles);

  const sortByVote = () => {
    const sortVote = articles.sort((a, b) => {
      return b.upvotes - a.upvotes;
    });
    setSortBy([...sortVote]);
  };

  const sortByRecent = () => {
    const sortRecent = articles.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setSortBy([...sortRecent]);
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
      <Articles articles={sortBy} />
    </div>
  );
};

export default App;
