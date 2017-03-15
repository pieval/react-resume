import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styles from './app.css';
import '../../app.global.css';
import resume from '../../resume.json';
import IdentityCard from '../IdentityCard';
import Skills from '../Skills';
import Work from '../Work';
import School from '../School';
import Interest from '../Interest';
import Footer from '../Footer';

export default () =>
  <div>
    <Row>
      <Col xs={12} md={3} className={styles.left}>
        <IdentityCard basics={resume.basics} languages={resume.languages} />
      </Col>
      <Col xs={12} md={9} >
        <div className={styles.main}>
          <Skills skillz={resume.skills} />
          <Work workz={resume.work} />
          <School schoolz={resume.education} />
          <Interest volunteers={resume.volunteer} interests={resume.interests} />
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Footer />
      </Col>
    </Row>
  </div>;
