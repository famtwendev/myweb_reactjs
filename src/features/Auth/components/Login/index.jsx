import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // console.log('Form submit: ', values);

      const action = login(values); //values la cac gia tri tu form
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // Them vai chuc nang khi dang ky thanh cong, vd: dong cua so dang ky,...

      // console.log('New user', user);

      // Close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      //
    } catch (error) {
      console.log('Failled to login:', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
