const config = {};

config.BACKEND_PORT = '3001';
config.TOKEN_COOKIE_KEY = 'brzahrana-token'; // name of the cookie for token
config.TOKEN_HEADER_KEY = 'x-brzahrana-token'; // name of the token key in http request headers
// config.JWT_SECRET = 'TAJNI_TOKEN';
// config.MONGOOSE_CONNECT_URL = 'mongodb+srv://aaaa:aaaa@bbbb.cccc.mongodb.net/baza_db1?retryWrites=true&w=majority';
// config.MONGOOSE_CONNECT_URL = 'mongodb://localhost/baza_db1';
config.MONGOOSE_CONNECT_URL = 'mongodb+srv://mongo:yKI4hF1bRag7TGLq@cluster0.tb2zz.mongodb.net/test?retryWrites=true&w=majority';

// export default config;
module.exports = config;