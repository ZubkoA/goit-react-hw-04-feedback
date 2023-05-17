import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <div>{message && <h2>{message}</h2>}</div>;
}

Notification.propTypes = {
  message: PropTypes.string,
};
