import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);

    e.target.reset();
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register} />

      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}

      <input
        type="number"
        name="numero"
        min="1"
        ref={register({
          min: 1,
          max: { value: 40, message: "maximo es 40 xd" }
        })}
      />

      {errors.exampleRequired && <span>This field is required</span>}

      {errors.numero && <span>{errors.numero.message}</span>}

      <input type="submit" />
    </form>
  );
}
