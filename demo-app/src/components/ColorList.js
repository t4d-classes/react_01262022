import PropTypes from 'prop-types';

export const ColorList = (props) => {

  const colorsList = props.colors.map(c =>
    <li key={c.id}>{c.name}</li>);

  return (
    <ul>
      {colorsList}
    </ul>    
  );

};

ColorList.defaultProps = {
  colors: [],
};


ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
}