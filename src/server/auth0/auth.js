import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'owlhands.auth0.com',
    clientID: 'wRgYjNMyws89f1GrIGqVvaQNUDggV1T9',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://owlhands.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}