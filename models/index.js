
//需要请求的数据

import {Request} from "../utils/request.js"
class IndexModel extends Request {
    getArticleList (magazineId=0,start=0) {
        return this.getData({
            url:`/getIndexArticleList/${magazineId}/${start}`
        })
    }
    getMarkTypeList(magazineId=0) {
        return this.getData({
            url:`/getMarkTypeList/${magazineId}`
        })
    }
    getRecommendInfo(magazineId=0) {
        return this.getData({
            url:`/getRecommendInfo/${magazineId}`
        })
    }
}
export {IndexModel}