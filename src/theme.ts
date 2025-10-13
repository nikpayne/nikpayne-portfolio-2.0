import { createSystem, defaultConfig } from "@chakra-ui/react"

// Create a custom system with your theme
export const system = createSystem(defaultConfig, {
  theme: {
    recipes: {
        text: {
          base: {
            color: { _light: "gray.800", _dark: "gray.400" },
            textWrap: 'pretty',
            fontWeight: '500'
          },
        },
        heading: {
          base: {
            color: { _light: "gray.900", _dark: "white" },
            fontWeight: '500'
          },
        },
        badge: {
          base: {
            color: { _light: "gray.800", _dark: "gray.400" },
            fontWeight: '500'
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
        heading: { value: "'PP Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" },
        body: { value: "'PP Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" }
      },
      fontSizes: {
        xs: { value: "0.75rem" },    // 12px
        sm: { value: "0.875rem" },   // 14px
        md: { value: "1rem" },       // 16px (base)
        lg: { value: "1.125rem" },   // 18px
        xl: { value: "1.25rem" },    // 20px
        "2xl": { value: "1.5rem" },  // 24px
        "3xl": { value: "1.875rem" }, // 30px
        "4xl": { value: "2.5rem" },  // 36px
        "5xl": { value: "3rem" },     // 48px
        "6xl": { value: "4rem" },  // 60px
        "7xl": { value: "5rem" },   // 72px
        "8xl": { value: "6rem" },   // 72px
      }
    }
  }
})
