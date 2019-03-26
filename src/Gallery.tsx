import React from 'react'
import PropTypes from 'prop-types'
import {Col, Row} from 'react-flexbox-grid';


const Gallery = ({increment, decrement, counter, images}: any) => (
    <Col xs={12}>
        <Row center={'xs'} middle={'xs'}>
            Clicked: {counter} times
            {' '}
            <button onClick={increment}>+</button>
            {' '}
            <button onClick={decrement}>-</button>
        </Row>
        <Row center={'xs'} middle={'xs'}>
            {images.map((img: any, index: number) =>
                <Col xs key={index}>
                    {img}
                </Col>
            )}
        </Row>
    </Col>
)

Gallery.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired
}

export default Gallery
