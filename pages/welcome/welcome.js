// pages/welcome/welcome.js
Page({
  data: {
  	avatarUrl:[],
  	canUserInfo: false
  },
  onLoad: function () {
  	var _this=this;
  	wx.getUserInfo({
  		success:function(res){
				 _this.setData({
				 	avatarUrl:res.userInfo.avatarUrl,
				 	canUserInfo: true
				 });
				 
  		},
  		
  		fail:function(res){
  			console.log("请求失败！")
  		}
  	})
  },
  goToIndex:function(){
  	wx.switchTab({
			url: "/pages/index/index"
		});
  },
  bindGetUserInfo:function(){
  	var avatarUrl = e.detail.userInfo.avatarUrl;
		this.setData({
			avatarUrl: avatarUrl,
			canUserInfo: true
		});
  }
})