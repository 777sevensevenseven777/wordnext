import * as React from 'react';

interface IProps {
  children: string | React.ReactNode;
}

export default function Login({ children }: IProps) {
  return (
    <div>
      {children}
    </div>
  );
}