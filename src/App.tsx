import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import {Row} from 'react-flexbox-grid';
import { CarouselType} from "./reducer/carousel";
import Carousel from './Carousel';

class App extends Component {

    makeKitties = () => {
        const tmp = []
        for (let n = 0; n < 20; n++) {
            const url = 'https://loremflickr.com/330/240?random=' + n
            tmp.push(<img key={'kitty_' + n} src={url} width={'50%'} />)
        }
        return tmp
    }

    render() {
        const {dispatch, carousel}: any = this.props
        const kitties = this.makeKitties()

        return (
            <div className="App">
                <Row center={'xs'} middle={'xs'}>
                    <h2>
                        {(carousel.pos + 1) + '/' + kitties.length}
                    </h2>
                </Row>
                <Carousel
                    dispatch={dispatch}
                    state={carousel}
                    images={kitties}
                    title="Carousel">
                </Carousel>
            </div>
        );
    }
}



type State = {
    carousel: CarouselType,
}

const mapStateToProps = (state: State) => ({
    carousel: state.carousel,
})


export default connect(mapStateToProps, null)(App)
