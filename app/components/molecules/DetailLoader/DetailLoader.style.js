import styled, {css} from 'styled-components';

export default css`
.wrapper {
  margin: 30px;
  padding: 30px;
  background: #fff;
  width: 360px;
  height: 640px;
  flex-direction: column;
}

.gallery {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.wrapper-cell {
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
  height: 300px;
  width: 24%;
  animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: #F6F6F6;
    background: linear-gradient(to right, #F6F6F6 8%, #F0F0F0 18%, #F6F6F6 33%);
    background-size: 800px 104px;
    position: relative;
}

.text {
  margin-top: 80px
}

.text-line {
  height: 10px;
  width: 50%;
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

.long-line {
    width: 80%;
}

.medium-line {
    width: 65%;
}
`;



