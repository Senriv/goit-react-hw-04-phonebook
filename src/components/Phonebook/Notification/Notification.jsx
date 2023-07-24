import PropTypes from 'prop-types';

export const Notification = ({ message = 'There is no contacts' }) => (
  <h3>{message}</h3>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
