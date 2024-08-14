import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
  errors: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;

  // // Validate errror
  const {
    formState: { errors },
  } = form;

  // const hasError = formState.touched[name] && errors[name];
  // console.log(form.errors[name]);

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          disabled={disabled}
          error={!!errors[name]} // Sử dụng thông tin lỗi từ prop errors
          helperText={errors[name]?.message} // Hiển thị thông tin lỗi nếu có
          // error={!!hasError}
          // helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
