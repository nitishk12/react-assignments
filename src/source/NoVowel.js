import React from 'react'
class NoVowel extends React.Component {
    constructor() {
        super()
        this.state = {
            text: ""
        }
        this.handleText = this.handleText.bind(this)
    }
    handleText(e) {
        const text = e.target.value
        const vowel = ['a', 'e', 'i', 'o', 'u']
        this.setState({ text: text.split('').filter(t => vowel.indexOf(t.toLowerCase()) === -1).join('') })
    }
    render() {
        return (
            <div>
                <form>
                    <h2>Text without vowels</h2>
                    <h2>{this.state.text}</h2>
                    <textarea type='text' value={this.state.text} onChange={this.handleText} />
                </form>
            </div>
        )
    }
}
export default NoVowel