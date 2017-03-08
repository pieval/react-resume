import React, { PropTypes } from 'react';
import Title from '../Utils/Title';
import DateGap from '../Utils/DateGap';
import styles from './styles.css';

const Work = (props) => {
  const { workz } = props;
  return (
    <section className={styles.work}>
      <Title title="Expériences professionnelles" />
      {
        workz.map(work =>
          <div key={work.company}>
            <h4>{work.position} - {work.company}</h4>
            <DateGap startDate={work.startDate} endDate={work.endDate} />
            <p className={styles.summary}>{work.summary}</p>
            <ul>
              {
                work.highlights.map(high =>
                  <li key={high}>{high}</li>)
                  }
            </ul>
          </div>,
        )
      }
    </section>
  );
};

Work.propTypes = {
  workz: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    website: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default Work;
