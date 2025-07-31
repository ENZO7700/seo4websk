
import type {Config} from 'tailwindcss';
import sharedConfig from './src/tailwind.config';

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: sharedConfig.prefix,
  presets: [sharedConfig],
};

export default config;
