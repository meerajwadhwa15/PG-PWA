import styled, {css} from 'styled-components';

export default css`
.wrapper {
  margin: 30px;
  padding: 30px;
  background: #fff;
  width: 360px;
  height: 640px;
  display: flex;
  flex-direction: column;
}

.wrapper-cell {
   display: flex;
   margin-bottom: 30px;
}

@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}

.animated-background {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #F6F6F6;
    background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
    background-size: 800px 104px;
    height: 20px;
    position: relative;
}

.image {
  height: 60px;
  width: 30%;
  animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #F6F6F6;
    background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
    background-size: 800px 104px;
    height: 96px;
    position: relative;
}

.text {
  margin-left: 20px;
  width: 70%;
}

.text-line {
  height: 10px;
  width: 100%;
  margin: 4px 0;
  animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #F6F6F6;
    background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
    background-size: 800px 104px;
    height: 20px;
    position: relative;
}
`;



