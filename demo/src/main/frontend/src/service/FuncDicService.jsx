import axios from 'axios';

const FUNCDIC_API_BASE_URL = "http://localhost:8080/api/function_dic";

class FuncDicService {

    getFuncDic() {
        return axios.get(FUNCDIC_API_BASE_URL);
    }
}

export default new FuncDicService();