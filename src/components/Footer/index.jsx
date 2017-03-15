import React from 'react';
import styles from './styles.css';

const Footer = () =>
  <div className={styles.footer}>
    <div>
      Réalisé &quot;Just for fun&quot; avec <a href="https://facebook.github.io/react/">ReactJS</a> et
      &nbsp;<a href="https://jsonresume.org/">JSONResume</a>
    </div>
    <div className={styles.github}>
      <a href="https://github.com/pieval/react-resume"><i className="fa fa-github fa-2x" /></a>
    </div>
  </div>;

export default Footer;
