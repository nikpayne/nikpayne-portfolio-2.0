import { createSystem, defaultConfig } from "@chakra-ui/react"

// Create a custom system with your theme
export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
        text: {
          base: {
            color: { _light: "gray.800", _dark: "gray.300" },
          },
        },
        heading: {
          base: {
            color: { _light: "gray.900", _dark: "white" },
            fontWeight: '400'
          },
        },
    },
    semanticTokens: {
        colors: {
          text: {
            secondary: {
              value: { _light: '{colors.gray.600}', _dark: '{colors.gray.400}' }
            }
          },
        }
    },
    tokens: {
      colors: {
        // Custom brand colors
        brand: {
          50: { value: "#E3F2FD" },
          100: { value: "#BBDEFB" }, 
          200: { value: "#90CAF9" },
          300: { value: "#64B5F6" },
          400: { value: "#42A5F5" },
          500: { value: "#2196F3" }, // Main brand color
          600: { value: "#1E88E5" },
          700: { value: "#1976D2" }, 
          800: { value: "#1565C0" },
          900: { value: "#0D47A1" }
        },
        // Custom accent colors
        accent: {
          50: { value: "#F3E5F5" },
          100: { value: "#E1BEE7" },
          200: { value: "#CE93D8" }, 
          300: { value: "#BA68C8" },
          400: { value: "#AB47BC" },
          500: { value: "#9C27B0" }, // Main accent color
          600: { value: "#8E24AA" },
          700: { value: "#7B1FA2" },
          800: { value: "#6A1B9A" },
          900: { value: "#4A148C" }
        },
        text: {
          secondary: {  _light: { value: 'gray.500' }, _dark: { value: 'gray.800' } }
        }
      },
      fonts: {
        heading: { value: "'Founders Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" },
        body: { value: "'Founders Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }
      },
    }
  }
})
