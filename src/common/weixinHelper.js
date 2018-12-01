function weixinShare(config, seoInfo) {
  wx.config({ // eslint-disable-line
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: config.appId, // 必填，公众号的唯一标识
    timestamp: config.timestamp, // 必填，生成签名的时间戳
    nonceStr: config.nonceStr, // 必填，生成签名的随机串
    signature: config.signature, // 必填，签名
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
    ], // 必填，需要使用的JS接口列表
  });
  wx.ready(() => { // eslint-disable-line
    const sdata = {
      title: seoInfo.title, // 分享标题
      desc: seoInfo.description, // 分享描述
      link: window.location.href, // 分享链接
      imgUrl: seoInfo.imgUrl,

      //  : 'http://mcdn.qingbao.cn/images/logo.png', // 分享图标
      // success: function() {
      // },
      // cancel: function() {
      // }
    };
    wx.onMenuShareTimeline(sdata); // eslint-disable-line
    wx.onMenuShareAppMessage(sdata); // eslint-disable-line
    wx.onMenuShareQQ(sdata); // eslint-disable-line
    wx.onMenuShareWeibo(sdata); // eslint-disable-line
    wx.onMenuShareQZone(sdata); // eslint-disable-line
  });
}

export default {
  weixinShare,
};
