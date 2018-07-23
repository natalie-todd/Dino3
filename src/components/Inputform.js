import React from 'react'

export default class Inputform extends React.Component {
    state = {

    }

    handleChange = (event) => {

    }
    handleSubmit = (event) => {

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='apply-here'>Apply Here:</label>
                <input id='apply-box'
                type='text'
                value={this.state.title}
                name='title'
                onChange={this.handleChange} />
                <input type='submit' name='submit' value='Submit' />
                </form>
        )
    }
}