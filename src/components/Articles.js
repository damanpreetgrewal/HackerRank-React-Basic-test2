import React from 'react';

const Articles = ({ articles }) => {
  return (
    <div className='card w-50 mx-auto'>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>UpVotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((item, index) => {
            return (
              <>
                <tr data-testid='article'>
                  <td data-testid='article-title'>{item.title}</td>
                  <td data-testid='article-upvotes'>{item.upvotes}</td>
                  <td data-testid='article-date'>{item.date}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
