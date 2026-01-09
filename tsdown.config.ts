import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: 'src/**/*.ts',
  platform: 'neutral',

  target: 'esnext',
  plugins: [],
  dts: true,
  unbundle: true,
  clean: false,
});
