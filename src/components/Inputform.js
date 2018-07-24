import React from 'react'

export default class Inputform extends React.Component {
    state = {
        shown: ['', 'Your application was submitted!']
    }
    
    handleSubmit = (event) => {
        event.preventDefault()

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='apply-here'>Apply Here:</label>
                <textarea id='application-text'
                    rows='8'
                    cols='100'/>
                    {/* value={this.state.title}
                    name='title'
                    onChange={this.handleChange}  */}
                <input onClick={this.toggle} id='submit' type='submit' value='Submit' />
            </form>

        )
    }
}
