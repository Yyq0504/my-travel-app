Page({
  data: {
    keyword: '',
    title: '',
    desc: '',
    imgs: [],
    // 扩展更多文创素材库
    materialLib: {
      "苏州": {
        title: "苏州·江南文创",
        desc: "园林、水墨、折扇、灯笼、白墙黛瓦、传统纹样贴纸",
        imgs: [
          "https://pic.qt6.com/upload/2021/0423/202104231129266998.jpg",
          "https://p.qqan.com/up/2021-4/202104282244252792.jpg",
          "https://img0.baidu.com/it/u=182161415,280123470&fm=253&fmt=auto&w=800&h=500"
        ]
      },
      "国潮": {
        title: "国潮·新中式文创",
        desc: "醒狮、祥云、瑞鹤、红金撞色、国潮贴纸、包装图案",
        imgs: [
          "https://img1.baidu.com/it/u=2012115361,1346521389&fm=253&fmt=auto&w=800&h=500",
          "https://img2.baidu.com/it/u=1666736169,116791517&fm=253&fmt=auto&w=800&h=500"
        ]
      },
      "猫": {
        title: "萌系猫咪文创",
        desc: "可爱插画、治愈贴纸、文具图案、软色文创小元素",
        imgs: [
          "https://img0.baidu.com/it/u=2294135125,2787916747&fm=253&fmt=auto&w=800&h=500",
          "https://img1.baidu.com/it/u=1030182112,240513311&fm=253&fmt=auto&w=800&h=500"
        ]
      },
      "敦煌": {
        title: "敦煌·丝路文创",
        desc: "飞天、藻井、骆驼、砂岩配色、壁画纹样、西域元素",
        imgs: [
          "https://img0.baidu.com/it/u=3090320650,3127010225&fm=253&fmt=auto&w=800&h=500",
          "https://img2.baidu.com/it/u=2502020699,4278243329&fm=253&fmt=auto&w=800&h=500"
        ]
      },
      "赛博朋克": {
        title: "赛博朋克·潮流文创",
        desc: "霓虹、机械、故障艺术、高饱和撞色、未来感贴纸",
        imgs: [
          "https://img1.baidu.com/it/u=1522072229,307070701&fm=253&fmt=auto&w=800&h=500",
          "https://img2.baidu.com/it/u=3078236540,1810130295&fm=253&fmt=auto&w=800&h=500"
        ]
      }
    }
  },

  onLoad(options) {
    const key = decodeURIComponent(options.key || '').trim()
    if (!key) {
      wx.showToast({ title: '关键词不能为空', icon: 'none' })
      wx.navigateBack()
      return
    }
    this.setData({ keyword: key })
    this.loadMaterial(key)
  },

  // 加载对应关键词的文创素材
  loadMaterial(key) {
    // 模糊匹配（比如输入“苏州园林”也能匹配到“苏州”）
    const matchKey = Object.keys(this.data.materialLib).find(k => key.includes(k))
    const material = matchKey ? this.data.materialLib[matchKey] : this.data.materialLib['苏州']
    
    this.setData({
      title: material.title,
      desc: material.desc,
      imgs: material.imgs
    })
  },

  // 预览图片
  previewImg(e) {
    const current = e.currentTarget.dataset.src
    wx.previewImage({
      current,
      urls: this.data.imgs
    })
  },

  // 跳转提交页
  goSubmit() {
    wx.navigateTo({
      url: '/submit/submit',
      fail: (err) => {
        console.error('跳转提交页失败：', err)
        wx.showToast({ title: '页面不存在', icon: 'none' })
      }
    })
  },

  // 跳转转盘抽奖页
  goLottery() {
    wx.navigateTo({
      url: '/lottery/lottery',
      fail: (err) => {
        console.error('跳转抽奖页失败：', err)
        wx.showToast({ title: '页面不存在', icon: 'none' })
      }
    })
  }
})