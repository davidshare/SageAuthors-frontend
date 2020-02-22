import React from 'react';
import PropTypes from 'prop-types';
import './AuthContainer.styles.scss';
import HomeIcon from '../../assets/svgs/home.svg';

const AuthContainer = (props) => {
  const { imgBackground } = props;
  return (
    <div className={`auth-container ${imgBackground}`}>
      <a className="auth-home-link" href="/">
        <img src={HomeIcon} />
        Home
      </a>
      {props.children}
    </div>
  );
};

AuthContainer.propTypes = {
  children: PropTypes.any,
  imgBackground: PropTypes.string,
};

export default AuthContainer;
