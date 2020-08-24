import PropTypes from "prop-types";

const cache = {
    init: async () => {
    },
    set: async () => {
    },
    get: async () => {
    },
    delete: async () => {
    },
    purge: async () => {
    },
    count: async () => {
    },
}

const Props = PropTypes.shape({
    set: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
});

export {
    cache,
    Props
};