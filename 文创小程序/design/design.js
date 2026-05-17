Page({
  data: {
    keyword: '',
    // 热门关键词推荐
    hotKeywords: ['苏州', '国潮', '猫', '敦煌', '赛博朋克']
  },

  // 输入关键词
  setKeyword(e) {
    this.setData({ keyword: e.detail.value })
  },

  // 选择热门关键词
  chooseHotKey(e) {
    const key = e.currentTarget.dataset.key
    this.setData({ keyword: key })
  },

  // 获取素材参考
  getMaterial() {
    const k = this.data.keyword.trim()
    if (!k) {
      wx.showToast({ title: '请输入关键词', icon: 'none' })
      return
    }
    // 编码特殊字符，避免路径错误
    wx.navigateTo({
      url: `/material/material?key=${encodeURIComponent(k)}`,
      fail: (err) => {
        console.error('跳转素材页失败：', err)
        wx.showToast({ title: '页面不存在', icon: 'none' })
      }
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

  // 直接跳转抽奖页
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