import "./StepThreeForm.css";
import { useForm } from "react-hook-form";

type Inputs = {
  comments: string;
};

const StepThreeForm = () => {
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
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="top-row">
          <label className="label">
            <div className="textbox-name-div">Comments</div>
            <textarea
              {...register("comments", { required: "Please write a comment" })}
            ></textarea>

            {errors.comments && (
              <div className="error-message">
               Comments is required.
              </div>
            )}
          </label>
        </div>

        <div id="final-button" className="button-div">
          <button className="next-button">Next &gt;</button>
        </div>
      </form>
    </div>
  );
};

export default StepThreeForm;


{/* <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="top-row">
          <label className="label">
            <div className="textbox-name-div">Comments</div>
            <textarea
              {...register("comments", { required: "Please write a comment" })}
            ></textarea>

            {errors.comments && (
              <div className="error-message">
                Valid telephone number is required.
              </div>
            )}
          </label>
        </div>

        <div className="button-div">
          <button className="next-button">Next &gt;</button>
        </div>
      </form>
    </div> */}