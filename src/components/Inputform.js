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
            </form>
        )
    }
export default Inputform