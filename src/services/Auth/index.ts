/* eslint-disable class-methods-use-this */
import { store } from '@redux/store';
import { logout } from '@redux/auth';
import History from '@/shared/libs/history';

class Auth {
  logout() {
    store.dispatch(logout());
    History.history.push('/login');
  }
}

export default new Auth();
