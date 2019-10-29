// components/subscribe/cmp.js
import { SubscribeModel } from "../../models/subscribe.js"

const subscribeModel = new SubscribeModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class: 'common',
    myTagList:[]
  },
  //在组件实例进入页面节点树时执行
  attached() {
    this.judgeTag()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {

      const mark = {
        tag: this.properties.tag,
        tagId: this.properties.tagId
      }
      if (this.data.class === 'common') {
        const myTagList = this.getMytagList()

        myTagList.push(mark)

        subscribeModel.setMyTagList(myTagList)


      } else {

        subscribeModel.removeMyTag(mark.tagId)

      }
      this.toggerClass()
      this.triggerEvent('tap')
    },
    //获取缓存
    getMytagList() {
      const myTagList = subscribeModel.getMyTagList();
      this.setData({
        myTagList
      })

      return myTagList;

    },

    //判断是否已订阅
    judgeTag() {
      const myTagList = this.getMytagList();

      myTagList.forEach(item => {
        if (item.tagId === this.properties.tagId) {
          this.setData({
            class: 'subscibe'
          })
        }
      })

    },

    //切换class，更换样式
    toggerClass() {
      let className = '';

      if (this.data.class === 'common') {
        className = 'subscribe'
      } else {
        className = 'common'
      }

      this.setData({
        class: className
      })
    }
  },

})
