import React, {Component} from 'react'

export default class Default extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Page not Found ! </h3>
            </div>
        )
    }
}