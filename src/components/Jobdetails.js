import React from 'react';

export default function Jobdetails({ data }) {
  if (!data || data.length < 1) return <h3>No Jobs Found</h3>;
  console.log(data);
    return (
      <ul id="job-details">
      {
        data.map(data => (
          <li key={data.id}>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </li>
        ))}
    </ul >
    );
  }

