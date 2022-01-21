import * as React from "react";

interface IProps {
  children: string | React.ReactNode;
}

export default function LoginLayout({ children }: IProps) {

  return (
    <div>{children}</div>
  );
}