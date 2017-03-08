import React, { PropTypes } from 'react';
import Title from '../Utils/Title';
import DateGap from '../Utils/DateGap';
import styles from './styles.css';

const Interests = (props) => {
  const { interests, volunteers } = props;
  if (volunteers.length > 0 || interests.length > 0) {
    return (
      <section className={styles.interests}>
        <Title title="Centres d'intérêts et autres activitées" />
        {
          volunteers.map(volunteer =>
            <div className={styles.entry} key={volunteer.organization}>
              <h4>{volunteer.position} - {volunteer.organization}</h4>
              <DateGap startDate={volunteer.startDate} endDate={volunteer.endDate} />
              <p className={styles.summary}>{volunteer.summary}</p>
              <ul>
                {
                  volunteer.highlights.map(high =>
                    <li key={high}>{high}</li>)
                }
              </ul>
            </div>,
          )
        }
        {
          interests.map(interest =>
            <div key={interest.name}>
              <h4>{interest.name}</h4>
              <ul>
                {
                  interest.keywords.map(keyword => <li key={keyword}>{keyword}</li>)
                }
              </ul>
            </div>)
        }
      </section>
    );
  }
  return false;
};

Interests.propTypes = {
  interests: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string),
  })),
  volunteers: PropTypes.arrayOf(PropTypes.shape({
    organization: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    website: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
  })),
};

Interests.defaultProps = {
  interests: [],
  volunteers: [],
};

export default Interests;
