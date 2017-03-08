import React, { PropTypes } from 'react';
import styles from './styles.css';

const Title = (props) => {
  const { title } = props;
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      <hr />
    </div>
  );
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Title;
