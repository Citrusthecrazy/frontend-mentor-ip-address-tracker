import React, { ChangeEvent, FC, FormEvent } from "react";

interface IInput {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
}

const Input: FC<IInput> = ({ value, onChange, onSubmitHandler }) => {
  return (
    <form
      className="xs:w-[38%] w-[87%] pl-6 bg-white rounded-xl flex flex-row justify-between overflow-hidden"
      onSubmit={onSubmitHandler}>
      <input
        value={value}
        onChange={onChange}
        className="w-full bg-transparent py-5 focus:outline-none hover:cursor-pointer"
        placeholder="Search for any IP address or domain"
      />
      <button
        type="submit"
        className="xs:w-[10%] w-[20%] justify-self-end bg-black h-full text-white bg-searchArrowImage bg-no-repeat bg-center hover:cursor-pointer"></button>
    </form>
  );
};

export default Input;
