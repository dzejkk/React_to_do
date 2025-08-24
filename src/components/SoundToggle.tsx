import { useSoundContext } from "../contexts/SoundContext";

export function SoundToggle() {
  const { soundsEnabled, toggleSounds } = useSoundContext();

  return (
    <button type="button" onClick={toggleSounds}>
      {soundsEnabled ? "🔊" : "🔇"} {soundsEnabled ? "ON" : "OFF"}
    </button>
  );
}
