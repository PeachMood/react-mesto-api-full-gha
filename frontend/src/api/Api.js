export class Api {
  constructor() {
    this._baseUrl = process.env.NODE_ENV === 'production' ? 'https://api.mesto.students.nomoredomains.monster' : 'http://localhost:3000';
  }

  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response.status);
  }

  sendRequest(endpoint, options) {
    return fetch(`${this._baseUrl}/${endpoint}`, options)
      .then(this._checkResponse);
  }
}