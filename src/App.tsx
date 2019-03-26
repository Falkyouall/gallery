import React, {Component} from 'react';
import {connect} from 'react-redux'
import Carousel from "./Carousel";
import './App.css';
import {Row} from 'react-flexbox-grid';

class App extends Component {
    state = {}

    static getDerivedStateFromProps(props: any, state: any) {
        return null
    }

    componentDidMount(): void {
    }

    makeKitties = () => {
        const tmp = []
        for (let n = 0; n < 20; n++) {
            const url = 'https://loremflickr.com/330/240?random=' + n
            tmp.push(<img key={'kitty_' + n} src={url} width={330} height={240}/>)
        }
        return tmp
    }

    render() {
        const {counter, increment, decrement, dispatch, carousel}: any = this.props
        const kitties = this.makeKitties()

        return (
            <div className="App">
                <Row center={'xs'} middle={'xs'}>
                    <p>
                        {(carousel.pos + 1)}
                    </p>
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
    counter: number,
    carousel: any,
}

const mapStateToProps = (state: State) => ({
    counter: state.counter,
    carousel: state.carousel,
})

/*const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(CounterActions, dispatch)
}*/

export default connect(mapStateToProps, null)(App)
