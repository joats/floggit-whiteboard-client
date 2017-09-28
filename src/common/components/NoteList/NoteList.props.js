import PropTypes from 'prop-types';

const props = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    infoList: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
    })),
    color: PropTypes.string.isRequired,
  })),
};

export default props;
