import { Soundbutton } from './Soundbutton';
import { SOUNDS } from '../utils/Constants';
import './Soundbox.css';

export const Soundbox = () => {
  return (
    <div className="soundbox">
      {Object.entries(SOUNDS).map(([sound, image]) => {
        return <Soundbutton key={sound} sound={sound} image={image} />;
      })}
    </div>
  );
};
