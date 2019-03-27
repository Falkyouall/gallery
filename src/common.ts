import styled from "styled-components";
import {PREV} from "./actions/actions";


export const Item = styled.div`
  text-align: center;
  padding: 100px;
  background-image: ${(props:any) => `url(${props.img})`};
`;

export const CarouselContainer:any = styled.div`
  display: flex;
  transition: ${(props:any) => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${(props:any) => {
    if (!props.sliding) return "translateX(calc(-80% - 20px))";
    if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
    return "translateX(0%)";
}};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 5px 5px 20px 7px rgba(168, 168, 168, 1);
`;

export const CarouselSlot: any = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${(props:any) => props.order};
`;

export const SlideButton: any = styled.button`
    color: #ffffff;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 100;
    padding: 10px;
    background-color: #f66f3e;
    border: 1px solid white;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  float: ${(props:any) => props.float};

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 75%;
`;

export const ExtraInfo = styled.div`
  margin-top: 25px;
  display: inline-block;
`;

