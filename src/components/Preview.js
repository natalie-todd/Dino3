import React, {Component} from 'react';

class Preview extends Component {
    state = {
        hidden: true
    }
    togglePreview = () => {
        if (!this.state.hidden) {
            return this.hidePreview();
        } else {
            return this.showPreview();
        }
    }
    hidePreview = () => {
        this.setState({ hidden: true });
    }
    showPreview = () => {
        this.setState({ hidden: false });
    }
    render() {
        return (
            <div>
                <button id='preview-toggle' className='preview'
                    onClick={ () => this.togglePreview()}>Show Preview</button>
                {!this.state.hidden && <section id='application-preview'>{this.props.application.application}
                </section>}
            </div>
        )
    }
}

export default Preview;