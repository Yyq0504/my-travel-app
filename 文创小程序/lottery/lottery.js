Page({
  // 页面初始数据
  data: {
    rotate: 0,       // 转盘旋转角度
    result: null,    // 抽奖结果
    isRotating: false // 防止重复点击
  },

  // 开始抽奖方法
  startLottery() {
    // 防止重复点击抽奖
    if (this.data.isRotating) return;
    
    // 奖品列表
    const list = [
      {
        title: "江南园林贴纸",
        pic: "https://p.qqan.com/up/2021-4/202104282244252792.jpg",
        desc: "苏州园林·亭台·窗格·水墨风"
      },
      {
        title: "国潮醒狮小插画",
        pic: "https://img1.baidu.com/it/u=2012115361,1346521389&fm=253&fmt=auto&w=800&h=500",
        desc: "国潮醒狮·红金撞色·适合贴纸"
      },
      {
        title: "治愈猫咪文创",
        pic: "https://img0.baidu.com/it/u=2294135125,2787916747&fm=253&fmt=auto&w=800&h=500",
        desc: "软萌猫咪·手账贴纸·文具周边"
      }
    ];

    // 生成 1800 到 2160 之间的随机角度（5-6圈，增加视觉效果）
    const deg = 1800 + Math.floor(Math.random() * 361);
    
    // 根据角度计算中奖索引（3个奖品，每120度一个）
    const prizeIndex = Math.floor((deg % 360) / 120) % list.length;
    const prize = list[prizeIndex];

    // 设置旋转状态，防止重复点击
    this.setData({
      isRotating: true
    });

    // 动画旋转效果（带动画过渡）
    this.setData({
      rotate: deg
    }, () => {
      // 旋转结束后显示结果
      setTimeout(() => {
        this.setData({
          result: prize,
          isRotating: false
        });
        // 弹窗提示中奖结果
        wx.showToast({
          title: `恭喜抽中：${prize.title}`,
          icon: 'success',
          duration: 2000
        });
      }, 3000); // 旋转3秒后显示结果
    });
  },

  // 页面加载时执行
  onLoad(options) {},

  // 页面显示时执行
  onShow() {
    // 重置抽奖状态
    this.setData({
      rotate: 0,
      result: null,
      isRotating: false
    });
  }
});