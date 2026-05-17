Page({
  data: {
    imgUrl: '',
    name: '',
    desc: ''
  },

  chooseImage() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      success: res => {
        this.setData({ imgUrl: res.tempFiles[0].tempFilePath })
      }
    })
  },

  setName(e) { this.setData({ name: e.detail.value }) },
  setDesc(e) { this.setData({ desc: e.detail.value }) },

  submitWork() {
    const { imgUrl, name, desc } = this.data
    if (!imgUrl || !name) {
      wx.showToast({ title: '请上传图片并填写名称', icon: 'none' })
      return
    }
    wx.showModal({
      title: '提交成功',
      content: '作品已收录，可参与盲盒抽奖',
      showCancel: false,
      success: () => wx.navigateBack()
    })
  }
})