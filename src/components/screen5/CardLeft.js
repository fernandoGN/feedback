import React from 'react'
import cls from 'classnames'
import { DropTarget } from 'react-dnd'
import './CardLeft.css'

const events = {
    drop(props, monitor) {
        return props
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    }
}

const CardLeft = ({ description, connectDropTarget, isOver }) => {
    const classes = cls('my-card-container', 'mdc-card', {
        'card__person--over': isOver
    })
    return connectDropTarget(
        <div className={classes}>
            <section className="mdc-card__primary">
                <h1 className="mdc-card__title mdc-card__title--large">{description}</h1>
                <h2 className="mdc-card__subtitle">{description}</h2>
            </section>
        </div>
    )
}

export default DropTarget('Card', events, collect)(CardLeft)