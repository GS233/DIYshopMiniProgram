// pages/home/home.js
Page({

  data: {
    dormList: [
      // 第一个swiper-item
      [{
        id: "第一个",
        image: "https://www.easyicon.net/api/resizeApi.php?id=1221973&size=64"
        //连云端再改地址
      }],
      // 第二个swiper-item
      [{
        id: "第二个",
        image: "https://www.easyicon.net/api/resizeApi.php?id=1221973&size=64"
      }
      ],
      [{
        id: "第三个",
        image: "https://www.easyicon.net/api/resizeApi.php?id=1221973&size=64"
      }
      ],
      [{
        id: "第四个",
        image: "https://www.easyicon.net/api/resizeApi.php?id=1221973&size=64"
      }
      ],
    ],
    shows :[
      [{
        id: 1,
        image: "https://www.easyicon.net/api/resizeApi.php?id=1221973&size=64"
      }]
    ]
  },



  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})