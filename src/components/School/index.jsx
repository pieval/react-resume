import React, { PropTypes } from 'react';
import Title from '../Utils/Title';
import styles from './styles.css';

const School = (props) => {
  const { schoolz } = props;
  return (
    <section className={styles.school}>
      <Title title="Formation" />
      {
        schoolz.map(school =>
          <div className={styles.entry} key={school.area}>
            <span className={styles.highlights}>{new Date(school.startDate).getFullYear()}
              &nbsp;- {new Date(school.endDate).getFullYear()} {school.studyType}</span>
            &nbsp;- {school.area}
            <div className={styles.location}>{school.institution}</div>
          </div>,
        )
      }
    </section>
  );
};

School.propTypes = {
  schoolz: PropTypes.arrayOf(PropTypes.shape({
    institution: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    studyType: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    gpa: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default School;
