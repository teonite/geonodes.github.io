import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";


type FormValues = {
  name: string;
  email: string;
};

const EarlyAccessForm = () => {
  const { 
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful, isSubmitting }
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

    formData.append('name',data.name);
    formData.append('email', data.email);

    return axios.post(
      'http://localhost:8000/submissions/geonodes/',
      data,
    ).catch((e: Error | AxiosError) => {
      const generalErrorMessage = "ERROR: Something happened on our end. Please try again later.";

      if (axios.isAxiosError(e)) {
        setError('email', { message: generalErrorMessage, type: 'custom' });
      } else {
        setError('email', { message: generalErrorMessage, type: 'custom' });
      }
    });

  
    // const modal = document.querySelector('.early-access-modal');
    // if (!modal) return;
    // modal.classList.add('hidden');
  };

  return (
    <div className="early-access-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>name:</span>
          <div className='form-input-wrapper'>
            <input
              type="text"
              {
                ...register(
                  'name',
                  {
                    required: {
                      value: true,
                      message: 'Please enter name.',
                    },
                  }
                )
              }
            />
            {/* <InputError message={errors?.name?.message as string ?? ''} /> */}
          </div>
        </label>
        <label>
          <span>email:</span>
          <div className='form-input-wrapper'>
            <input
              type="text"
              {
                ...register(
                  'email',
                  {
                    required: {
                      value: true,
                      message: 'ERROR: Please enter email.',
                    },
                    // validate: (v) => isEmail(v) || 'ERROR: Please enter correct email.',
                  }
                )
              }
            />
            {/* <InputError message={errors?.email?.message as string ?? ''} /> */}
          </div>
        </label>
        <button className="action-button">
          sign in
        </button>
      </form>
    </div>
  );
};

export default EarlyAccessForm;