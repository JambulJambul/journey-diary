import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import BlueButton from '@components/BlueButton';

import { ping } from '@containers/App/actions';
import classes from './style.module.scss'

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes["login-container"]}>
        <div className={classes["login-wrapper"]}>
          <h2>
            <FormattedMessage id="login_title" />
          </h2>
          <div className={classes["input-box"]}>
            <label htmlFor="email">
              <FormattedMessage id="login_email" />
            </label><br />
            <input className={classes["input-text"]} type="text" name="email" id="email" /><br />
            <label htmlFor="password">
              <FormattedMessage id="login_password" />
            </label><br />
            <input className={classes["input-text"]} type="password" name="password" id="password" /><br />
          </div>
          <div className={classes["submit-button"]}>
            <BlueButton text={<FormattedMessage id="login_title" />}></BlueButton>
          </div>
          <div className={classes['create-account-message']}>
            <p><FormattedMessage id="create_account_message" /></p>
            <b><Link to={'/register'}><FormattedMessage id="click_here" /></Link></b>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
