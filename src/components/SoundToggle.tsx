import { useSoundContext } from "../contexts/SoundContext";

export function SoundToggle() {
  const { soundsEnabled, toggleSounds } = useSoundContext();

  return (
    <button onClick={toggleSounds}>
      {soundsEnabled ? "🔊" : "🔇"} {soundsEnabled ? "ON" : "OFF"}
    </button>
  );
}
