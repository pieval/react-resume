import React, { PropTypes } from 'react';
import monthlyResumeDateFormat from '../../../formatters/dateformater';

const DateGap = (props) => {
  const { startDate, endDate } = props;
  const startDateFormated = monthlyResumeDateFormat(new Date(startDate));
  const endDateFormated = (endDate) ? monthlyResumeDateFormat(new Date(endDate)) : null;

  if (endDateFormated) {
    return <div>{ startDateFormated } - { endDateFormated }</div>;
  }
  return <div>Depuis { startDateFormated }</div>;
};

DateGap.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
};

DateGap.defaultProps = {
  endDate: null,
};

export default DateGap;
