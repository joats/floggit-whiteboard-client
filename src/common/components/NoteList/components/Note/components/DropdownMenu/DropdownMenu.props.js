import PropTypes from 'prop-types';

const props = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })),
  colors: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
  })),
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

export default props;
