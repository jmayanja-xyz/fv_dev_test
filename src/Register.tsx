import { useForm } from "react-hook-form";
import "./Register.css";

type RegisterInputs = {
  firstname: string;
  surname: string;
  email: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();
  const onSubmit = (data: RegisterInputs): void => {
    console.log(data);
    callBackendAPI();
  };

  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input
            type="text"
            {...register("firstname", {
              required: "Please enter your first name.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Please enter a valid first namae",
              },
            })}
          />
        </label>
        {errors.firstname && (
          <div className="error-message">Valid firstname is required.</div>
        )}

        <label>
          Surname
          <input
            type="text"
            {...register("surname", {
              required: "Please enter your first name.",
            })}
          />
        </label>
        {errors.surname && (
          <div className="error-message">Valid surname is required.</div>
        )}

        <label>
          Email Address:
          <input
            type="email"
            {...register("email", {
              required: "Please enter your valid email.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
        </label>
        {errors.email && (
          <div className="error-message">Valid e-mail is required.</div>
        )}

        <button className="next-button">Next &gt;</button>
      </form>
    </div>
  );
}

export default Register;
