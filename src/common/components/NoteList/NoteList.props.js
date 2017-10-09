import PropTypes from 'prop-types';

const props = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    infoList: PropTypes.arrayOf(PropTypes.string),
    color: PropTypes.string.isRequired,
  })),
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
};

export default props;
