import axios from 'axios';
import { BASE_URL } from 'utils/variables';
const publicApi = axios.create({ baseURL: BASE_URL });
export default publicApi;
