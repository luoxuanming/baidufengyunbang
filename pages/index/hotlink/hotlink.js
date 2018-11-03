var app=getApp();
Page({
  data: {
  	url:""
  },
	onLoad:function(){
		this.setData({
			url:app.url
		})
	}
})