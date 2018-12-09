import axios from 'axios';
// eslint-disable-next-line
import store from './store/index';

export default () => axios.create({
  baseURL: store.state.baseUrl,
  timeout: 5000,
});
