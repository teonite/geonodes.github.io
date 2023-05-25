import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';

type FormValues = {
  name: string;
  email: string;
};

export const EarlyAccessForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  const closeModal = (event: any) => {
    const modal = document.querySelector('.early-access-modal');
    if (!modal) return;

    if (event.target.className === 'early-access-modal') {
      modal.classList.add('hidden');
    }
  };

  const onSubmit = (data: FormValues) => {
    return submitForm(data);
  };

  const submitForm = (data: FormValues) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);

    return axios
      .post('https://cfm.teonite.net/submissions/geonodes/', data)
      .catch((e: Error | AxiosError) => {
        const generalErrorMessage =
          'Something happened on our end. Please try again later.';

        if (axios.isAxiosError(e)) {
          setError('email', { message: generalErrorMessage, type: 'custom' });
        } else {
          setError('email', { message: generalErrorMessage, type: 'custom' });
        }
      });
  };

  return (
    <div className="early-access-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>name:</span>
          <div className="form-input-wrapper">
            <input
              type="text"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter name.',
                },
              })}
            />
          </div>
        </label>
        <label>
          <span>email:</span>
          <div className="form-input-wrapper">
            <input
              type="text"
              {...register('email', {
                required: {
                  value: true,
                  message: 'ERROR: Please enter email.',
                },
                validate: (v) => isEmail(v) || 'ERROR: Please enter correct email.',
              })}
            />
          </div>
        </label>
        <div>
          {isSubmitSuccessful ? (
            <div style={{ color: '#00EECC', height: 30 }}>We will get in touch soon!</div>
          ) : errors?.email || errors?.name ? (
            <div style={{ height: 30, textAlign: 'center', color: '#f02e2e' }}>
              {errors.name?.message ?? errors?.email?.message}
            </div>
          ) : (
            <div style={{ height: 30 }} />
          )}
        </div>
        <button className="action-button">sign in</button>
      </form>
    </div>
  );
};
