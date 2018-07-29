import React from 'react'

class Inputform extends Component {
    render() {
        return (
            <form onSubmit={this.props.submit}>
                <label htmlFor='apply-here'>Apply Here:</label>
                <textarea id='application-text'
                    rows='8'
                    cols='100' 
                    value={this.props.application.application}
                    onChange={this.props.toggleVisibility}/>
                <input id='submit' type='submit' value='Submit' />
                <div id='message' className='status-bar'>{this.props.message}</div>
            </form>
        );
    }
}
export default Inputform