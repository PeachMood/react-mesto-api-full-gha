import { Api } from './Api';

class AuthApi extends Api {
  register(data) {
    return this.sendRequest('signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });
  }

  login(data) {
    return this.sendRequest('signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(data),
    });
  }

  logout() {
    return this.sendRequest('signout', {
      method: 'POST',
      credentials: 'include'
    });
  }

  checkToken() {
    return this.sendRequest('users/me', {
      method: 'GET',
      credentials: 'include'
    });
  }
}

export const authApi = new AuthApi();