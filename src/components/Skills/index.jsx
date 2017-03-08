import React, { PropTypes } from 'react';
import Title from '../Utils/Title';
import styles from './styles.css';

const Skills = (props) => {
  const { skillz } = props;
  return (
    <section className={styles.skill}>
      <Title title="Compétences techniques" />
      {
        skillz.map(skill =>
          <div key={skill.name}>
            <h4>{skill.name}</h4>
            <ul>
              {
                skill.keywords.map(keyword =>
                  <li key={keyword}>{keyword}</li>,
                )
              }
            </ul>
          </div>,
        )
      }
    </section>
  );
};

Skills.propTypes = {
  skillz: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

export default Skills;
