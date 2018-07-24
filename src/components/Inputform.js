import React from 'react'

class Inputform extends React.Component {

    clicksubmit(e) {
        e.preventDefault()
        this.props.clickSubmit
        console.log('hi')
    }

    render() {
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
}

export default Inputform