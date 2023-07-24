import PropTypes from 'prop-types';
import { FilterText, FilterInput } from './Filter.styled';

export const Filter = ({ value, changeFilter }) => (
  <div>
    <FilterText>Find contacts by name</FilterText>
    <FilterInput type="text" value={value} onChange={changeFilter} />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
