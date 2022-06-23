import "./StepTwoForm.css";
import { useForm } from "react-hook-form";
import { string } from "yup";

type Inputs = {
  telephoneNumber: number;
  gender: string;
  dob: number;
  day: number;
  month: number;
  year: number;
};

const StepTwoForm = () => {
  const {
    register,
    handleSubmit,
    watch,
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
            <select
              {...register("gender", { required: "Please select gender" })}
            >
              <option value="" selected disabled hidden>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Other</option>
            </select>

            {errors.gender && (
              <div className="error-message">Gender is required.</div>
            )}
          </label>
        </div>

        <div>
          <div className="textbox-name-div" id="dob">
            Date of birth
          </div>
          <label className="dob-div">
            <input
              className="date-input"
              type="number"
              min="1"
              max="31"
              {...register("day", {
                required: "Please enter the numeric birth day.",
                min: 1,
                max: 31,
              })}
            />

            <input
              className="date-input"
              type="number"
              min="1"
              max="12"
              {...register("month", {
                required: "Please enter your birth month.",
                min: 1,
                max: 12,
              })}
            />

            <input
              className="date-input"
              type="number"
              min="1900"
              max="2022"
              {...register("year", {
                required: "Please enter your birth year.",
                min: 1900,
                max: 2022,
              })}
            />
          </label>

          {(errors.day || errors.month || errors.year) && (
            <div className="error-message">
              Valid date of birth is required.
            </div>
          )}
        </div>

        <div className="button-div">
          <button className="next-button">Next &gt;</button>
        </div>
      </form>
    </div>
  );
};

export default StepTwoForm;
