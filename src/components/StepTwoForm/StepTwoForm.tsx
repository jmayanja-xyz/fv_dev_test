import "./StepTwoForm.css";
import { useForm } from "react-hook-form";

type Inputs = {
  telephoneNumber: number;
  gender: string;
  dob: number;
};

const StepTwoForm = () => {
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
            <div className="textbox-name-div">Telephone number</div>
            <input
              type="text"
              {...register("telephoneNumber", {
                required: "Please enter your telephone number",
                pattern: {
                  value: /^0([1-6][0-9]{8,10}|7[0-9]{9})$/,
                  message: "Please enter a valid telephone number ",
                },
              })}
            />

            {errors.telephoneNumber && (
              <div className="error-message">
                Valid telephone number is required.
              </div>
            )}
          </label>

          <label className="label">
            <div className="textbox-name-div"> Gender</div>
            <select {...register("gender", { required: "select one option" })}>
              <option value="" selected disabled hidden>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Other</option>
            </select>

            {errors.gender && (
              <div className="error-message">Valid surname is required.</div>
            )}
          </label>
        </div>
        <div className="email-div">
          <label className="label">
            <div className="textbox-name-div"> Date of birth</div>
            <input
              type="email"
              {...register("dob", {
                required: "Please enter your valid email.",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />

            {errors.dob && (
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

export default StepTwoForm;
