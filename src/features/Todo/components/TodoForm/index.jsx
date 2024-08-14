import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-control/InputField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
// import InputField from '../../../../components/form-control/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
// Bắt lỗi và show lỗi

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputField name="title" label="Todo" form={form} />
      </form>
    </div>
  );
}

export default TodoForm;
