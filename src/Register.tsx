import { useForm, SubmitHandler } from "react-hook-form";

type RegisterInputs = {
    firstname: string;
    surname: string;
    email: string;
  };

function Register() {

    const { register, handleSubmit, watch, formState: {errors} } = useForm<RegisterInputs>();
    const onSubmit = (data: RegisterInputs): void => {
        console.log(data);
      };

  


  return (
    <div className="Register">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input type="text"
            {...register("firstname", { required: "Please enter your first name.", pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Please enter a valid first namae',}, })}/>
        </label>
        {errors.firstname && <div>Valid firstname is required.</div>}


        <label>
         Surname
          <input type="text" {...register("surname", { required: "Please enter your first name." })}/>
        </label>
        {errors.surname && <div>Valid surname is required.</div>}
        

        <label>
          Email Address:
          <input type="email" {...register("email", { required: "Please enter your valid email.", pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        },  })} />
        </label>
        {errors.email && <div>Valid e-mail is required.</div>}
        
        <button>Next &gt;</button>
      </form>
    </div>
  );
  
}

export default Register