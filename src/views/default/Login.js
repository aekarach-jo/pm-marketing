import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';
import { useLogin } from 'utils/auth';
import clx from 'classnames';
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
    <div className="min-h-100 d-flex align-items-center w-100">
      <div className="w-100 w-lg-100">
        <div>
          <h1 style={{ fontSize: '64px', fontWeight: 'bold', lineHeight: '64px', marginBottom: '39px' }}>
            ระบบตรวจสอบ
            <br />
            คําต้องห้ามโฆษณา <br />
            สถานพยาบาล
          </h1>
          <h2
            style={{
              background: '-webkit-linear-gradient(#FF0080, #7928CA)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              'font-weight': 'bold',
            }}
          >
            เข้าสู่ระบบ
          </h2>
          <p style={{ marginBottom: '41px' }}>Enter the email and password provided to log in.</p>

          <div className="w-50">
            <form id="loginForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
              <div className="mb-3 filled form-group tooltip-end-top">
                <p style={{ fontWeight: 'bold' }}>Email</p>
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
                <p style={{ fontWeight: 'bold' }}>Password</p>
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
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" htmlForfor="flexSwitchCheckChecked">
                  Remember me
                </label>
              </div>
              <Button
                className="text-white font-weight-bold w-100"
                style={{
                  background: '-webkit-linear-gradient(#FF0080, #7928CA)',
                }}
                size="lg"
                type="submit"
              >
                {f({ id: 'SINGIN' })}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const rightSide = (
    <div>
      <div className="sw-lg-60">
        <div className="mb-3 w-100">
          <img
            className=""
            style={{ width: '753px', height: '708px', position: 'absolute', top: '0', right: '0' }}
            src="/img/background/image.png"
            alt="background Login"
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} />
    </>
  );
};

export default Login;
