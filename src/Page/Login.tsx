import { useState } from "react";
import { useForm } from "react-hook-form";

export function Login() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState<string>();
  const onSubmit = (data: any) => {
    setData(data);
  };
  // console.log(data);
  function handleData(data : any) {
      if (data) {
          return (
            <>
            <div>Username: {data.username}</div>
            <div>Password: {data.password}</div>
            </>
          )
      }
  }
  
  return (
    <form
      action=""
      className="form-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <header></header>
      <div className="login-row">
        <div className="title">Email address</div>
        <div className="login-input">
          <input
            type="text"
            defaultValue="test"
            {...register("username", { required: true, maxLength: 20 })}
          />
          {errors.username && <div>This field is required</div>}
        </div>
      </div>
      <div className="login-row">
        <div className="title">Password</div>
        <div className="login-input">
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <div>This field is required</div>}
        </div>
      </div>

      <div>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div className="data-collect">{handleData(data)}</div>
    </form>
  );
}
