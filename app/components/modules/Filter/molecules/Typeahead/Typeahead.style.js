import {css} from 'styled-components';

export default css`
    width: 62%;

    body {
        font-family: Helvetica, sans-serif;
      }

      .status {
        line-height: 52px;
      }

      .react-autosuggest__container {
        position: relative;
        z-index: 1000;
      }

      .react-autosuggest__input {
        width: 100%;
        border: none;
        height: 48px;
        padding: 10px 20px;
        font-family: Helvetica, sans-serif;
        font-weight: 300;
        font-size: 16px;
        border: 1px solid #aaa;
        border-radius: 4px;
        border-radius: 0;
      }

      .react-autosuggest__input--focused {
        outline: none;
      }

      .react-autosuggest__input--open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      .react-autosuggest__suggestions-container {
        display: none;
      }

      .react-autosuggest__suggestions-container--open {
        display: block;
        position: absolute;
        top: 51px;
        width: 100%;
        border: 1px solid #aaa;
        background-color: #fff;
        font-family: Helvetica, sans-serif;
        font-weight: 300;
        font-size: 16px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        z-index: 2;
      }

      .react-autosuggest__suggestions-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      .react-autosuggest__suggestion {
        cursor: pointer;
        padding: 0 20px;
        border-bottom: 1px solid #999;
      }

      p {
        margin: 0;
      }

      .tt-suggestion {
        padding: 0 !important;
        margin: 0;
      }

      .react-autosuggest__suggestion--highlighted {
        background-color: #ddd;
      }


`;
