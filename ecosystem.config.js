'use strict';

module.exports = {
  apps: [{
    name: 'node-api',
    script: 'app.js',
    // instances: 'max',
    // exec_mode: 'cluster',
    // watch: true,
    // ignore_watch: ['package-lock.json', 'node_modules', 'logs', '.git'],
    // max_memory_restart: '1G',
    // autorestart: true,
    env: {
      NODE_ENV: 'development',
      PORT: '3000',
    },
    env_production: {
      NODE_ENV: 'production',
      // PORT: '3000',
    },
  }],

  // deploy: {
  //   production: {
  //     user: 'node',
  //     host: '212.83.163.1',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:repo.git',
  //     path: '/var/www/production',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
