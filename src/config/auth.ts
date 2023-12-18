import 'dotenv/config';

export default {
  token_secret: process.env.JWT_TOKEN_SECRET,
  expires_in_token: process.env.JWT_EXPIRES_IN,
};
