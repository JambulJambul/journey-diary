import { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import BlueButton from '@components/BlueButton';
import { Link } from 'react-router-dom';
import encryptPayload from '@utils/encryptionHelper';
import { register } from './actions';
import { ping } from '@containers/App/actions';
import classes from './style.module.scss'

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});
  const onChangeHandler = (value, type) => {
    setUser({
      ...user,
      [type]: value
    })
  }

  const onSubmit = () => {
    const dataUser = {
      fullname: encryptPayload(user.fullname),
      email: encryptPayload(user.email),
      password: encryptPayload(user.password),
    }
    dispatch(register(
      dataUser
    ))
    console.log(dataUser)
  }

  return (
    <>
      <div className={classes["register-container"]}>
        <div className={classes["register-wrapper"]}>
          <h2>
            <FormattedMessage id="register_title" />
          </h2>
          <div className={classes["input-box"]}>
            <label htmlFor="">
              <FormattedMessage id="register_full_name" />
            </label><br />
            <input onChange={(e) => onChangeHandler(e.target.value, 'fullname')} className={classes["input-text"]} type="text" name="fullname" id="fullname" /><br />
            <label htmlFor="">
              <FormattedMessage id="login_email" />
            </label><br />
            <input onChange={(e) => onChangeHandler(e.target.value, 'email')} className={classes["input-text"]} type="text" name="email" id="email" /><br />
            <label htmlFor="">
              <FormattedMessage id="login_password" />
            </label><br />
            <input onChange={(e) => onChangeHandler(e.target.value, 'password')} className={classes["input-text"]} type="password" name="password" id="password" /><br />
          </div>
          <div className={classes["submit-button"]}>
            <button onClick={() => onSubmit()} >test</button>
            <div className={classes["submit-box"]} onClick={() => onSubmit()}>
              <BlueButton text={<FormattedMessage id="register_title" />}></BlueButton>
            </div>
          </div>
          <div className={classes['login_message']}>
            <p><FormattedMessage id="to_login_message" /></p>
            <b><Link to={'/login'}><FormattedMessage id="click_here" /></Link></b>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
