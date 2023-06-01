import axios from 'axios';

const FUNCDIC_API_BASE_URL = "http://localhost:8080/api/function_dic";
const MAIN_API_BASE_URL = "http://localhost:8080/api/";

class PageService {
    getFuncDic() {
        return axios.get(FUNCDIC_API_BASE_URL);
    }

    /*getMain() {
        return axios.get(MAIN_API_BASE_URL);
    }*/
}

export default new PageService();