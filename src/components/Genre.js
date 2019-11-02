import React from 'react'

export default class Genre extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        const { title, id, selected } = this.props
        return (
            <span
                className={`genre ${selected ? 'is-selected' : ''}`}
                onClick={async () => {
                    await this.props.clickHandler(id)
                }}
            >
                {' '}
                {title}{' '}
            </span>
        )
    }
}
