import { ButtonHTMLAttributes } from 'react';
import '../styles/button.scss'

// Tipo de atibuto que meu botao pode receber
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){
  return (
    <button className="button" {...props} />
  )
};
