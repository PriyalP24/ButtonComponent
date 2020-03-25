import React, { FC, ReactNode } from "react";



// type ButtonProps = {
//   children: ReactNode;

//   /**
//    * Simple click handler
//    */
//   onClick?: () => void;
// };
/**
 * The world's most _basic_ button
 */
interface IProps {
    message: String;
  }
const Button: FC<IProps> = ({ message }) => {
    return <button>{message}</button>;
  };
export default Button;


// export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
//   <button onClick={onClick} type="button">
//     {children}
//   </button>
// );