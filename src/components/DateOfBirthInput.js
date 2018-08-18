import React from 'react';
import PropTypes from 'prop-types';

const renderDayOptions = () => {
  const options = [];
  for (let i = 1; i <= 31; i++) {
    const formatted = i < 10 ? '0' + i : i.toString();
    options.push(
      <option value={formatted} key={formatted}>{formatted}</option>
    );
  }
  return options;
};

const renderMonthOptions = () => {
  const options = [];
  for (let i = 1; i <= 12; i++) {
    const formatted = i < 10 ? '0' + i : i.toString();
    options.push(
      <option value={formatted} key={formatted}>{formatted}</option>
    );
  }
  return options;
};

const renderYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const options = [];
  for (let i = currentYear; i >= 1900; i--) {
    options.push(
      <option value={i} key={i}>{i}</option>
    );
  }
  return options;
};

const DateOfBirthInput = ({
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
}) => (
    <div className="row">
      <div className="col s3">
        <label>Date Of Birth:</label>
      </div>
      <div className="col s3">
        <label>Day:</label>
        <select
          value={day}
          className="browser-default"
          onChange={onDayChange}
        >
          <option value="">None</option>
          {renderDayOptions()}
        </select>
      </div>

      <div className="col s3">
        <label>Month:</label>
        <select
          value={month}
          className="browser-default"
          onChange={onMonthChange}
        >
          <option value="">None</option>
          {renderMonthOptions()}
        </select>
      </div>

      <div className="col s3">
        <label>Year:</label>
        <select
          value={year}
          className="browser-default"
          onChange={onYearChange}
        >
          <option value="">None</option>
          {renderYearOptions()}
        </select>
      </div>
    </div>
  );

DateOfBirthInput.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
  onDayChange: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired,
};

DateOfBirthInput.defaultProps = {
  day: '',
  month: '',
  year: '',
};

export default DateOfBirthInput;
