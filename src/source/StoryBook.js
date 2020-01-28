import React from 'react'

class StoryBook extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            body: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
    }
    handleFormSubmit(e) {
        e.preventDefault()
        localStorage.setItem('document', JSON.stringify(this.state));
    }

    handleTitleChange(e) {
        const title = e.target.value
        this.setState({ title })
    }

    handleBodyChange(e) {
        const body = e.target.value
        this.setState({ body })
    }
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));

        if (localStorage.getItem('document')) {
            this.setState({
                title: this.documentData.title,
                body: this.documentData.body,
            })
        } else {
            this.setState({
                title: '',
                body: ''
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Story Book</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Title<br />
                        <input type='text' value={this.state.title} onChange={this.handleTitleChange} /><br />
                        Body<br />
                        <textarea value={this.state.body} onChange={this.handleBodyChange}></textarea>
                    </label>
                    <br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default StoryBook