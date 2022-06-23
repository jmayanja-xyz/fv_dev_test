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
          <label className="label">
            <div className="textbox-name-div">First Name</div>
            <input
              type="text"
              {...register("firstname", {
                required: "Please enter your first name.",
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Please enter a valid first name",
                },
              })}
            />

            {errors.firstname && (
              <div className="error-message">Valid firstname is required.</div>
            )}
          </label>

          <label className="label">
            <div className="textbox-name-div"> Surname</div>
            <input
              type="text"
              {...register("surname", {
                required: "Please enter your first name.",
              })}
            />

            {errors.surname && (
              <div className="error-message">Valid surname is required.</div>
            )}
          </label>
        </div>
        <div className="email-div">
          <label className="label">
            <div className="textbox-name-div"> Email Address:</div>
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

            {errors.email && (
              <div className="error-message">Valid e-mail is required.</div>
            )}
          </label>
        </div>

        <div className="button-div">
        <button className="next-button">Next &gt;</button>
        </div>
        
      </form>
    </div>
  );
};

export default StepOneForm;
