import * as React from 'react';
// require('./LoginLayout.module.css');

interface IProps {
  children: string | React.ReactNode;
}

export default function LoginLayout({ children }: IProps) {
  return (
    <div>
      {children}
    </div>
  );
}