import React, { PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Profile from '../../../public/profile.png';
import styles from './styles.css';

const ResumeTitle = (props) => {
  const { name, label } = props;
  return (
    <div className={styles.textCenter}>
      <h1 className={styles.nameTitle}>{name}</h1>
      <h3 className={styles.functionTitle}>{label}</h3>
    </div>
  );
};
ResumeTitle.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const PersonnalInfo = (props) => {
  const { location, phone, email } = props;
  return (
    <ul>
      <li>
        <i className="material-icons">location_on</i>
        <div>
          <div>{location.address}</div>
          <div>{location.postalCode} {location.city}</div>
        </div>
      </li>
      <li><i className="material-icons">phone</i> {phone}</li>
      <li><i className="material-icons">mail_outline</i> {email}</li>
    </ul>
  );
};

PersonnalInfo.propTypes = {
  location: PropTypes.shape({
    address: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    countryCode: PropTypes.string,
    region: PropTypes.string,
  }).isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const LanguageSpoken = (props) => {
  const { languages } = props;
  return (
    <ul>
      <li>
        <i className="material-icons">language</i>
        <div>
          {
            languages.map(lang =>
              <div key={lang.name}>
                {lang.name} : {lang.level}
              </div>)
          }
        </div>
      </li>
    </ul>
  );
};

LanguageSpoken.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  })).isRequired,
};

const IdentityCard = (props) => {
  const { basics, languages } = props;
  return (
    <div className={styles.idcard}>
      <div className="visiblemd visiblelg">
        <Row center="xs">
          <Col xs={12}>
            <img className={styles.profilePicture} src={Profile} alt="profile" />
            <ResumeTitle name={basics.name} label={basics.label} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <PersonnalInfo location={basics.location} phone={basics.phone} email={basics.email} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <LanguageSpoken languages={languages} />
          </Col>
        </Row>
      </div>
      <div className="visiblexs visiblesm">
        <Row middle="xs" >
          <Col xs={4}>
            <img className={`${styles.profilePicture} ${styles.picturePosition}`} src={Profile} alt="profile" />
          </Col>
          <Col xs={4}>
            <ResumeTitle name={basics.name} label={basics.label} />
          </Col>
          <Col xs={4}>
            <PersonnalInfo location={basics.location} phone={basics.phone} email={basics.email} />
            <hr />
            <LanguageSpoken languages={languages} />
          </Col>
        </Row>
      </div>
    </div>

  );
};

IdentityCard.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
  })).isRequired,
  basics: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    picture: PropTypes.string,
    location: PropTypes.shape({
      address: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      countryCode: PropTypes.string,
      region: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
export default IdentityCard;
