import React, { PropTypes } from 'react';
import Profile from '../../../public/profile.png';
import styles from './styles.css';

const IdentityCard = (props) => {
  const { basics, languages } = props;
  return (
    <div className={styles.idcard}>
      <img className={styles.profilePicture} src={Profile} alt="profile" />
      <h1 className={styles.textCenter}>{basics.name}</h1>
      <h3 className={styles.textCenter}>{basics.label}</h3>
      <hr />
      <ul>
        <li>
          <i className="material-icons">location_on</i>
          <div>
            <div>{basics.location.address}</div>
            <div>{basics.location.postalCode} {basics.location.city}</div>
          </div>
        </li>
        <li><i className="material-icons">phone</i> {basics.phone}</li>
        <li><i className="material-icons">mail_outline</i> {basics.email}</li>
      </ul>
      <hr />
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
