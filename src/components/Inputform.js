import React from 'react'

const Inputform = ({ showMessage, toggleVisibility }) => {
    return (
        <form>
            <label htmlFor='apply-here'>Apply Here:</label>
            <textarea id='application-text'
                rows='8'
                cols='100' />
            <input onClick={(e) =>
                this.onItemClick(e)} id='submit' type='submit' value='Submit' />
            <p>{this.onClick}</p>
            {/* <button type='submit' onClick={() =>
                toggleVisibility(preview)}>Show Preview</button> */}
        </form>

    )
}
export default Inputform