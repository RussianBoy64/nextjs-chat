import React from "react";

interface wrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
  return <div>{children}</div>;
};

export default Wrapper;
