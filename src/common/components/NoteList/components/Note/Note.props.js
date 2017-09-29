import PropTypes from 'prop-types';

const props = {
  title: PropTypes.string.isRequired,
  infoList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
  })),
  color: PropTypes.string,
};

export default props;
