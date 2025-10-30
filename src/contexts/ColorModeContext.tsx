import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useToken } from "@chakra-ui/react";
import { LIGHT_BG, DARK_BG } from "../App";

type ColorMode = "light" | "dark";

interface ColorModeContextType {
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    // Check localStorage first
    const stored = localStorage.getItem("chakra-ui-color-mode");
    if (stored === "light" || stored === "dark") return stored;

    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  // Resolve to the same colors used in App.tsx
  const [lightBg, darkBg] = useToken("colors", [LIGHT_BG, DARK_BG]);

  useEffect(() => {
    // Update document class and localStorage when colorMode changes
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(colorMode);
    root.setAttribute("data-theme", colorMode);
    localStorage.setItem("chakra-ui-color-mode", colorMode);

    // Update theme-color meta tag for iOS
    const themeColor = colorMode === "dark" ? darkBg : lightBg;
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", themeColor);
    } else {
      // Create meta tag if it doesn't exist
      themeColorMeta = document.createElement("meta");
      themeColorMeta.setAttribute("name", "theme-color");
      themeColorMeta.setAttribute("content", themeColor);
      document.head.appendChild(themeColorMeta);
    }

    // Update body background color
    document.body.style.backgroundColor = themeColor;
  }, [colorMode, lightBg, darkBg]);

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
}
