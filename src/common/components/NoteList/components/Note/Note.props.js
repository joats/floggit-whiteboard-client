import PropTypes from 'prop-types';

const props = {
  title: PropTypes.string.isRequired,
  infoList: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
};

export default props;
