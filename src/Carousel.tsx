import React from "react";
// @ts-ignore
import {Swipeable} from "react-swipeable";
import {NEXT, PREV} from "./actions/actions";

import {CarouselContainer, CarouselSlot, SlideButton, Wrapper,} from "./common";

const getOrder = ({index, pos, numItems}: any) => {
    return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const Carousel = (props: any) => {
    const {state, dispatch, images}:any = props;
    const numItems =  React.Children.count(images);

    const slide = (dir: any) => {
        dispatch({type: dir, numItems});
        setTimeout(() => {
            dispatch({type: "stopSliding"});
        }, 50);
    };
    const config = {
        onSwipedLeft: () => slide(NEXT),
        onSwipedRight: () => slide(PREV),
        trackMouse: true
    };

    return (
        <Swipeable {...config}>
            <Wrapper>
                <CarouselContainer dir={state.dir} sliding={state.sliding}>
                    {images.map((child: HTMLDivElement, index: any) => (
                        <CarouselSlot
                            key={index}
                            order={getOrder({index: index, pos: state.pos, numItems})}
                        >
                            {child}
                        </CarouselSlot>
                    ))}
                </CarouselContainer>
            </Wrapper>
            <SlideButton onClick={() => slide(PREV)} float="left">
                Prev
            </SlideButton>
            <SlideButton onClick={() => slide(NEXT)} float="right">
                Next
            </SlideButton>
        </Swipeable>
    );
};


export default Carousel;
