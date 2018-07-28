import React from 'react'
//Change from class to same as Jobdetails if you don't use state
const Preview = ({ criteria }) => {
        return (
            <section id="application-preview" key={criteria}>{criteria}</section>
        )
    }
