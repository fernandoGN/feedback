import React from 'react'
import { DragSource } from 'react-dnd'
import './CardRight.css'

const cardSource = {
    beginDrag({ description }) {
        return { description }
    },
    endDrag(props, monitor) {
        console.log(monitor.getItem())
        console.log(monitor.getDropResult())
        window.alert('DROPPED')
    }
}

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

const CardRight = ({ description, connectDragSource }) => {
    return connectDragSource(
        <div className="my-card-container mdc-card">
            <section className="mdc-card__primary">
                <h1 className="mdc-card__title mdc-card__title--large">{description}</h1>
                <h2 className="mdc-card__subtitle">{description}</h2>
            </section>
        </div>
    )
}


export default DragSource('Card', cardSource, collect)(CardRight)