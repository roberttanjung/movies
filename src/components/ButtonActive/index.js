'use client';

import ButtonActiveDisabled from "./ButtonActiveDisabled";

const ButtonActive = ({ showDisabled }) => {
  if (showDisabled) return <ButtonActiveDisabled />

  return (
    <button>Active Button</button>
  );
};

export default ButtonActive;
