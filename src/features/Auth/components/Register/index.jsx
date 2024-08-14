import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      //console.log('Form submit: ', values);

      //auto set username = email
      values.username = values.email;

      const action = register(values); //values la cac gia tri tu form
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      // Them vai chuc nang khi dang ky thanh cong, vd: dong cua so dang ky,...

      console.log('New user', user);

      // Close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
      //
      enqueueSnackbar('Register new register successfully!!! 🎉', { variant: 'success' });
    } catch (error) {
      console.log('Failled to register:', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
