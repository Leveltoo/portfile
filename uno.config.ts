import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        mono: ['Geist Mono']
      }
    })
  ]
});
