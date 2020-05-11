// Api
import { ApiPublic } from 'utils/api';

class examplesService {
    static getExamples(id) {
        return ApiPublic.post(`/examples/${id}`);
    }
}

export default examplesService;
