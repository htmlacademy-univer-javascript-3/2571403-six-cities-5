/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import '../../../markup/css/errorMessage.css';
import { AppRoute } from '../../mocks/login';
import { CITIES } from '../../mocks/city';

function LoginPage({onLoginFormSubmit, onRandomCityClick}:{onLoginFormSubmit : (login:string,password:string) => void; onRandomCityClick : (cityNumber: number) => void}):JSX.Element{
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const randomCityNumber = Math.round(Math.random() * 5);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const letterMask = /[A-Za-z]/g;
    const numberMask = /[0-9]/g;
    if (passwordRef.current !== null){
      const isPasswordValid = letterMask.test(passwordRef.current.value) && numberMask.test(passwordRef.current.value);
      if (loginRef.current !== null && isPasswordValid) {
        onLoginFormSubmit(loginRef.current.value,passwordRef.current.value);
      }
      if (!isPasswordValid){
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        toast.error('write password with at least 1 letter and 1 number');
      }
    }
  };

  const handleRandomCityClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onRandomCityClick(randomCityNumber);
  };

  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to ={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post"
              data-testid = 'login-form'
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref = {loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  data-testid = 'email-input'
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref = {passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  data-testid = 'password-input'
                />
              </div>
              <button className="login__submit form__submit button" type="submit" onClick={handleSubmit}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to = {AppRoute.Main}>
                <span onClick = {handleRandomCityClick} data-testid = 'randomCitySpan'>{CITIES[randomCityNumber].title}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default React.memo(LoginPage);
