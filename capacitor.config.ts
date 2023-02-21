
import { CapacitorConfig } from '@capacitor/cli';

const appId = 'com.example.app';
const appName = 'game-platform';
const server = process.argv.includes('-hmr') ? {
  'url': 'http://100.115.92.203:5173',   // always have http:// in url
  'cleartext': true
} : {};
const webDir = 'public';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload config', config);

export default config;
  