import { Api } from './Api';

class UserApi extends Api {
  getUserInfo() {
    return this.sendRequest('users/me', {
      method: 'GET',
      credentials: 'include',
    });
  }

  getInitialCards() {
    return this.sendRequest('cards', {
      method: 'GET',
      credentials: 'include',
    });
  }

  editUserInfo(userInfo) {
    return this.sendRequest('users/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(userInfo)
    });
  }

  editUserAvatar(avatar) {
    return this.sendRequest('users/me/avatar', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(avatar)
    });
  }

  addCard(card) {
    return this.sendRequest('cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(card)
    });
  }

  deleteCard(cardId) {
    return this.sendRequest(`cards/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  addLike(cardId) {
    return this.sendRequest(`cards/${cardId}/likes`, {
      method: 'PUT',
      credentials: 'include',
    });
  }

  deleteLike(cardId) {
    return this.sendRequest(`cards/${cardId}/likes`, {
      method: 'DELETE',
      credentials: 'include',
    });
  }

  toggleLike(cardId, isLiked) {
    return isLiked ? this.deleteLike(cardId) : this.addLike(cardId);
  }
}

export const userApi = new UserApi();
