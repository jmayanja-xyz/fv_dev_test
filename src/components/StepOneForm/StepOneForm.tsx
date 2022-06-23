import "./StepOneForm.css";
import { useForm } from "react-hook-form";

type Inputs = {
  firstname: string;
  surname: string;
  email: string;
};

const StepOneForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs): void => {
    console.log(data);
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="top-row">
          <label className="first-name-label">
            <div className="first-name-div">First Name</div>
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

            {errors.firstname && (
              <div className="error-message">Valid firstname is required.</div>
            )}
          </label>

          
            <label className="surname-label">
             <div className="surname-div"> Surname</div>
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
          </div>
        

        <div className="email-textbox">
          <label className="email-label">
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
        </div>

        <button className="next-button">Next &gt;</button>
      </form>
    </div>
  );
};

export default StepOneForm;
