import React, { useState } from 'react';
// import { Howl } from 'howler';
import soundExport from '../sounds/Soundfiles';
import './Soundbutton.css';

export const Soundbutton = ({ sound, image }) => {
  const [isActive, setActive] = useState(null);

  const playSound = (sound) => {
    const ad = new Audio(soundExport[sound]);
    ad.play();
    setActive(sound);
    setTimeout(() => {
      setActive(null);
    }, 100);
  };
  return (
    <div
      className={isActive === sound ? 'soundBtn scale' : 'soundBtn'}
      onClick={() => playSound(sound)}
    >
      <img
        className="imageClass"
        src={image}
        height={100}
        width={100}
        alt="photo"
      />
    </div>
  );
};
