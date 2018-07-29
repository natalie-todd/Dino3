import React from 'react';

const Jobdetails = ({ criteria }) => {
  if (!criteria || criteria.length < 1) return <h3>No Jobs Found</h3>;
    return (
      <ul id="job-details">
      {criteria.map(application => (
          <li key={application.id}>
            <h4>{application.title}</h4>
            <p>{application.description}</p>
          </li>
        ))}
    </ul >
    );
  }
export default Jobdetails;
