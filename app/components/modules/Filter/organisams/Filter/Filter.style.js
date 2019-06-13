import {css} from 'styled-components';

export default css`
@media (max-width: 767px) {
    .input-group {
        flex-direction: column;
        height: auto !important;
    }

    .input-group-btn {
        margin-top: 10px;
    }

    .dropdown-menu {
        z-index: 5000;
    }

    .tt-suggestion {
        text-align: left;
    }
}
`;