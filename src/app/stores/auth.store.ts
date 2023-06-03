import * as SecureStore from 'expo-secure-store';
import {action, makeObservable, observable, runInAction} from 'mobx';
import React from 'react';

class AuthStore {
  loading = false;
  user = null;

  constructor() {
    makeObservable(this, {
      loading: observable,
      user: observable,
      validateUser: action.bound,
      login: action.bound,
      logout: action.bound,
    });
  }

  async validateUser() {
    const user = await SecureStore.getItemAsync('user');
    runInAction(() => {
      this.loading = true;
      this.user = user;
      this.loading = false;
    });
  }

  async login(username, password) {
    if (!(username == 'spectrum1user' && password == '12345')) {
      return null;
    }

    await SecureStore.setItemAsync('user', username);
    runInAction(() => {
      this.user = username;
    });

    return username;
  }

  async logout() {
    await SecureStore.deleteItemAsync('user');
    runInAction(() => {
      this.user = null;
    });
  }
}

const authStore = new AuthStore();

export const AuthStoreContext = React.createContext(authStore);
export const useAuthStore = () => React.useContext(AuthStoreContext);
