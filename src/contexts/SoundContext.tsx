import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

type SoundContextType = {
  soundsEnabled: boolean;
  toggleSounds: () => void;
};

// Provide a default value of undefined for type safety
const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundsEnabled, setSoundsEnabled] = useState(true);

  const toggleSounds = () => {
    setSoundsEnabled((prev) => !prev);
  };

  return (
    <SoundContext.Provider value={{ soundsEnabled, toggleSounds }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSoundContext(): SoundContextType {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSoundContext must be used within SoundProvider");
  }
  return context;
}
