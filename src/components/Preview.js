import React from 'react'

const Preview = ({ criteria }) => {
    return (
        <section id="application-preview" key={criteria}>{criteria}</section>
    )
}
export default Preview;