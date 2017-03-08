import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './app.css';
import resume from '../../resume.json';
import IdentityCard from '../IdentityCard';
import Skills from '../Skills';
import Work from '../Work';
import School from '../School';
import Interest from '../Interest';

export default () =>
  <Row>
    <Col xs={12} md={3} className={styles.left}>
      <IdentityCard basics={resume.basics} languages={resume.languages} />
    </Col>
    <Col xs={12} md={9} className={styles.main}>
      <Skills skillz={resume.skills} />
      <Work workz={resume.work} />
      <School schoolz={resume.education} />
      <Interest volunteers={resume.volunteer} interests={resume.interests} />
    </Col>
  </Row>;
