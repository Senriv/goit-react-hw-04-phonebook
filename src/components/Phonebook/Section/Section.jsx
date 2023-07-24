import PropTypes from 'prop-types';
import { SectionWrapper } from './Section.styled';

export const Section = ({ title = 'Section title', children }) => (
  <SectionWrapper>
    <h2>{title}</h2>
    {children}
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
