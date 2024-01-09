import './style.scss';
import { FC } from 'react';

interface ICharacteristicProps {
  title: string;
  text: string | number;
}

export const Characteristic: FC<ICharacteristicProps> = ({ title, text }) => {
  return (
    <div className="characteristic">
      <b>{title}: </b>
      <span>{text}</span>
    </div>
  );
};
