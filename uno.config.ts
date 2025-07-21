import { defineConfig, presetAttributify, presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetAttributify(), // Enables attributify mode
    presetIcons(), // Enables icon support
    presetWebFonts({})
  ]
  // You can add custom rules, shortcuts, etc. here
});
