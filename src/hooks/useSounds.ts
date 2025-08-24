import useSound from "use-sound";
import soundFileOne from "../assets/sounds/click-main.mp3";
import soundFileTwo from "../assets/sounds/click-fullfiled.mp3";
import soundFileThree from "../assets/sounds/click-delete.mp3";
import soundKeyboard from "../assets/sounds/keyboard-natural.mp3";
import { useSoundContext } from "../contexts/SoundContext";

type UseSoundsReturn = {
  playMainCLick: () => void;
  playFullfiledClick: () => void;
  playDeleteClick: () => void;
  playKeyboard: () => void;
  playRandomKeyboard: () => void;
};

export default function useSounds(): UseSoundsReturn {
  const { soundsEnabled } = useSoundContext();

  const [OriginalplayMainCLick] = useSound(soundFileOne, {
    volume: 0.4,
  });
  const [OriginalplayFullfiledClick] = useSound(soundFileTwo, {
    volume: 0.6,
  });
  const [OriginalplayDeleteClick] = useSound(soundFileThree, {
    volume: 0.4,
  });
  const [OriginalplayKeyboard] = useSound(soundKeyboard, {
    sprite: {
      key1: [0, 150], // Adjust these timings based on your file
      key2: [200, 150],
      key3: [400, 150],
      key4: [600, 150],
      key5: [800, 150],
    },
    volume: 0.25, // Keep keyboard sounds quiet
  });

  const playMainCLick = () => {
    if (soundsEnabled) {
      OriginalplayMainCLick();
    }
  };

  const playFullfiledClick = () => {
    if (soundsEnabled) OriginalplayFullfiledClick();
  };

  const playDeleteClick = () => {
    if (soundsEnabled) OriginalplayDeleteClick();
  };

  const playKeyboard = () => {
    if (soundsEnabled) OriginalplayKeyboard();
  };

  const playRandomKeyboard = () => {
    if (soundsEnabled) {
      const keys = ["key1", "key2", "key3", "key4", "key5"];
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      OriginalplayKeyboard({ id: randomKey });
    }
  };

  return {
    playMainCLick,
    playFullfiledClick,
    playDeleteClick,
    playKeyboard,
    playRandomKeyboard,
  };
}
