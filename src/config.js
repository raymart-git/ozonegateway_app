const devConfig = {
    API_URL: 'http://localhost:3000/'
  };
  
const prodConfig = {
    API_URL: 'https://ozonegateway-api.vercel.app/'
};
  
const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
  
export default config;