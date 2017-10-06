import PropTypes from 'prop-types';

const props = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    infoList: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string.isRequired,
  })),
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleUpdateText: PropTypes.func.isRequired,
  handleUpdateColor: PropTypes.func.isRequired,
};

export default props;
