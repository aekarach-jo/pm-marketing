import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import HtmlHead from 'components/html-head/HtmlHead';
import { useLogin } from 'utils/auth';
import { request } from 'utils/axios-utils';

const Login = () => {
  const { replace } = useHistory();
  const { requestLogin, isFetching } = useLogin();

  const { formatMessage: f } = useIntl();

  const title = f({ id: 'auth.login' });
  const description = f({ id: 'auth.description' });

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(f({ id: 'auth.validation.username.required' })),
    password: Yup.string()
      // .min(6, 'Must be at least 6 chars!')
      .required(f({ id: 'auth.validation.password.required' })),
  });
  const initialValues = { username: '', password: '' };
  const onSubmit = async (values) => {
    // console.log('submit form', values);

    try {
      await requestLogin(values, true);
      replace('/');
    } catch (err) {
      console.error('Login error :  ', err);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const getDefaultCompany = async () => {
    const res = await request({ url: `/masterData/company/find?isDefault=true` });
    localStorage.setItem('ConfigDecimal', res.data.data[0]?.configDecimal);
  };

  useEffect(() => {
    if (!isFetching) {
      getDefaultCompany();
    }
  }, [isFetching]);

  const leftSide = (
    <div className="w-100 flex-shrink-0">
      <div className="section-logo w-100 position-relative d-block d-lg-none overflow-hidden" style={{ zIndex: 0, height: '45dvh' }}>
        <div className="bg-fade" />
        <img
          className="mx-auto"
          style={{ zIndex: 3, width: '173px', height: '173px', position: 'absolute', top: '2rem', left: 0, right: 0 }}
          src="/img/logo/logo-login.png"
          alt="background Login"
        />
        <img
          className=""
          style={{ zIndex: 2, maxWidth: '400px', width: '70%', position: 'absolute', top: '0', right: '0', objectFit: 'fill' }}
          src="/img/background/image-no-icon.png"
          alt="background Login"
        />
      </div>
      <div className="form-login min-h-100 d-flex align-items-center w-100">
        <div className="w-100 content" style={{ zIndex: 4 }}>
          <div>
            <h1 className="title" style={{ fontSize: '64px', fontWeight: 'bold', lineHeight: '64px', marginBottom: '39px', color: '#252F40' }}>
              ระบบตรวจสอบ <br />
              คําต้องห้ามโฆษณา <br />
              สถานพยาบาล
            </h1>
            <h2
              className="title-login"
              style={{
                background: '-webkit-linear-gradient(#FF0080, #7928CA)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                fontWeight: 'bold',
                fontSize: '36px',
              }}
            >
              เข้าสู่ระบบ
            </h2>
            <p className="desc" style={{ color: '#8392AB', fontSize: '20px' }}>
              Enter the email and password provided to log in.
            </p>

            <div className="w-100 mt-5">
              <form id="loginForm" className="tooltip-end-bottom" onSubmit={handleSubmit} style={{ width: '360px' }}>
                <div className="mb-3 filled form-group tooltip-end-top">
                  <p className="mb-2" style={{ fontWeight: 600, fontSize: '12px', color: '#252F40' }}>
                    Email
                  </p>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder={f({ id: 'Email' })}
                    value={values.username}
                    onChange={handleChange}
                    disabled={isFetching}
                    className="border border-dark-subtle ps-2"
                  />
                  {errors.username && touched.username && <div className="d-block invalid-tooltip">{errors.username}</div>}
                </div>
                <div className="mb-3 filled form-group tooltip-end-top">
                  <p className="mb-2" style={{ fontWeight: 600, fontSize: '12px', color: '#252F40' }}>
                    Password
                  </p>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder={f({ id: 'Password' })}
                    disabled={isFetching}
                    className="border border-dark-subtle ps-2"
                  />
                  {/* <NavLink className="text-small position-absolute t-3 e-3" to="/forgot-password">
                Forgot?
              </NavLink> */}
                  {errors.password && touched.password && <div className="d-block invalid-tooltip">{errors.password}</div>}
                </div>
                <div className="form-check form-switch mb-4 ">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                  <label className="form-check-label" htmlForfor="flexSwitchCheckChecked">
                    Remember me
                  </label>
                </div>
                <Button
                  className="text-white font-weight-bold w-100 py-2 d-flex justify-content-center align-items-center"
                  style={{
                    background: 'linear-gradient(135deg, #FF0080 0%,#7928CA 100%)',
                    height: '40px',
                  }}
                  size="lg"
                  type="submit"
                >
                  {f({ id: 'SINGIN' })}
                </Button>
                <div className="text-center mt-5" style={{ fontSize: '13px', fontWeight: 400, color: '#8392AB' }}>
                  Copyright © 2024 PM Marketing. All rights reserved
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const rightSide = (
    <div className="w-100 d-none d-md-block">
      <div className="mb-3 w-100">
        <img
          className="bg-img-banner d-none d-lg-block"
          style={{ width: '753px', height: '708px', position: 'absolute', top: '0', right: '0' }}
          src="/img/background/image.png"
          alt="background Login"
        />
      </div>
    </div>
  );

  const bottom = <div style={{ fontSize: '13px', fontWeight: 400, color: '#8392AB' }}>Copyright © 2024 PM Marketing. All rights reserved</div>;

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} bottom={bottom} />
    </>
  );
};

export default Login;
