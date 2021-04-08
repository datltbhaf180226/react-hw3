import { useState } from "react";
import { useForm } from "react-hook-form";

export function Product() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState<string>();
  const onSubmit = (data: any) => {
    setData(data);
  };
  function handleData(data: any) {
    if (data) {
      return (
        <>
          <div>Product Id: {data.productId}</div>
          <div>Product Name: {data.productName}</div>
          <div>Price: {data.productPrice}</div>
          <div>Quantity: {data.productQuantity}</div>
        </>
      );
    }
  }

  return (
    <form
      action=""
      className="product-container"
      onSubmit={handleSubmit(onSubmit)}
    >
      <header></header>
      <div className="product-row">
        <div className="product-input">
          <div>Product Id</div>
          <input
            type="text"
            {...register("productId", { required: true, maxLength: 20 })}
          />
          {errors.productId && <div>This field is required</div>}
        </div>
        <div className="product-input">
          <div>Product Name</div>
          <input
            type="text"
            {...register("productName", { required: true, maxLength: 20 })}
          />
          {errors.productName && <div>This field is required</div>}
        </div>
        <div className="product-input">
          <div>Quantity</div>
          <input
                      type="number"
                  min="0"
            {...register("productQuantity", { required: true })}
          />
          {errors.productQuantity && <div>This field is required</div>}
        </div>
        <div className="product-input">
          <div>Price</div>
          <input
            type="number"
                      step="0.1"
                  min="0"
            {...register("productPrice", { required: true })}
          />
          {errors.productPrice && <div>This field is required</div>}
        </div>
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
      <div className="data-collect">{handleData(data)}</div>
    </form>
  );
}
