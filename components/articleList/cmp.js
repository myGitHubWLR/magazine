// components/articleList/cmp.js
import {IndexModel} from "../../models/index.js";
import {SearchModel} from '../../models/search.js';
const indexModel = new IndexModel()
const searchModel = new SearchModel()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:{
      type:Array,
      value:[],
      observer(){}
    },
    more:{
      type:String,
      value:"",
      observer:'loadMore'
    },
    magazineId:{
      type:Number,
      value:0,
      observer:'hasMoreData'
    },
    word:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    noMoreData:false,
    type:''
  },
  attached() {
    const curPages = getCurrentPages();
    const index = curPages.length - 1
    let type = ''
    if(curPages[index].route === 'pages/search/search'){
      type = 'search'
    }else{
      type ='index'
    }
    this.setData({
      type
    })
  },
  methods: {
    // loading请求更多的数据
    //页面通知组件加载更多的数据->组件执行加载数据函数->
    //通过锁来判断是否正在加载：如果正在加载，直接返回；如果没有，则加载数据、上锁->数据请求回来、解锁->与原数据合并
    loadMore(){
      if(this._isLock() || this.data.noMoreData){
        return
      }
      this._loadLock()
      this.getMoreData()
      
    },
    getMoreData(){
      const start = this.data.articleList.length;
      let getMore = null;
      if(this.data.type === 'search'){
        const word = this.data.word;
        getMore = searchModel.getSearchArticleList(word,start)

      }else{
        const magazineId = this.data.magazineId
        getMore = indexModel.getArticleList(magazineId,start)
      }

      getMore.then(res => {
          this._setMoreList(res)
          this._unLoadLock()
      })
    },
    hasMoreData(){
      this.setData({
        noMoreData:false
      })
    },
    _isLock(){
      return this.data.loading
    },
    _loadLock(){
      this.setData({
        loading:true
      })
    },
    _unLoadLock() {
      this.setData({
        loading:false
      })
    },
    _setMoreList(list){
      const combineList = this.data.articleList.concat(list)
      if(combineList.length === this.data.articleList.length){
        this.setData({
          noMoreData:true
        })
      }
      this.setData({
        articleList:combineList
      })
    }
  }
})
