import React from 'react';
import Preview from './Preview';

const Jobdetails = ({ criteria }) => {
  if (!criteria || criteria.length < 1) return <h3>No Jobs Found</h3>;
  console.log(criteria);
    return (
      <ul id="job-details">
      {
        criteria.map(criteria => (
          <li key={criteria.id}>
            <h4>{criteria.title}</h4>
            <p>{criteria.description}</p>
          </li>
        ))}
    </ul >
    );
  }
export default Jobdetails;
