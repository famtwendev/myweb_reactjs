import { yupResolver } from '@hookform/resolvers/yup';
import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  LinearProgress,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import InputField from 'components/form-control/InputField';
import PasswordField from 'components/form-control/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import InputField from '../../../../components/form-control/InputField';
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
// Bắt lỗi và show lỗi
// https://github.com/jquense/yup
function RegisterForm(props) {
  const defaultTheme = createTheme();

  const schema = yup.object().shape({
    // fullName Validate
    fullName: yup
      .string()
      .required('Please enter your full name')
      .test('should has at least two words', 'Please enter at least two words.', (value) => {
        // console.log(value);
        return value.split(' ').length >= 2;
      }),

    // email Validate
    email: yup.string().required('Please enter your email.').email('Please enter a valid email address'),

    // password Validate
    password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 characters.'),
    // .matches(/[A-Z]/, 'Password must include at least one uppercase letter.')
    // .matches(/[a-z]/, 'Password must include at least one lowercase letter.')
    // .matches(/\d/, 'Password must include at least one number.')
    // .matches(/[#$@!%&*.,/]/, 'Password must include at least one special character.'),

    // retypePassword Validate
    retypePassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Please does not match.'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            position: 'relative',
            paddingTop: (theme) => theme.spacing(4),
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isSubmitting && (
            <LinearProgress
              color="secondary"
              sx={{ position: 'absolute', top: (theme) => theme.spacing(1), left: 0, right: 0 }}
            />
          )}
          <Avatar sx={{ m: '0 auto', bgcolor: (theme) => theme.palette.secondary.main }}>
            <LockOutlined></LockOutlined>
          </Avatar>

          <Typography
            component="h3"
            variant="h5"
            sx={{ margin: (theme) => theme.spacing(2, 0, 3, 0), textAlign: 'center' }}
          >
            Create An Account
          </Typography>
          {/* <Box component="form" onSubmit={form.handleSubmit(handleSubmit)} sx={{ mt: 3 }}> */}
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="fullName" label="Full Name" form={form} />
            <InputField name="email" label="Email" form={form} />
            <PasswordField name="password" label="Password" form={form} />
            <PasswordField name="retypePassword" label="Retype Password" form={form} />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ margin: (theme) => theme.spacing(3, 0, 2, 0) }}
              size="large"
            >
              Create an account
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RegisterForm;
