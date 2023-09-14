/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
})


const nextConfig = {
  images: {
    domains: [
      'm.shinsegaepoint.com',
      'mycloudmembership-prd.s3.ap-northeast-2.amazonaws.com',
      'storage.googleapis.com'
    ],
  },
}



module.exports = nextConfig;
