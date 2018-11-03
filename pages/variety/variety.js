var app=getApp();
var aList=[];
Page({
  data: {
  	nav:[],
  	list:[],
  	bid:1613
  },
  onLoad: function () {
  	var _this=this;
  	wx.request({
  		url:"https://top.baidu.com/mobile_v2/buzz?b=1613&c=531",
  		success:function(res){
  			console.log(res.data.result);
			for(var i=0;i<res.data.result.topwords.length;i++){
   					var json={
   						'keyword':res.data.result.topwords[i].keyword,
   						'searches':res.data.result.topwords[i].searches,
   						'trend':res.data.result.topwords[i].trend,
   						'isNew':res.data.result.topwords[i].isNew,
   						'abstract':res.data.result.descs[i].content.data.abstract,
   						'image':res.data.result.descs[i].content.data.image
   					}
   					aList.push(json);
   				}
			console.log(aList);
			_this.setData({
				nav:res.data.result.boards,
				list:aList
			});
  		}
  	});
  },
	navtapFn:function(e){
   		var _this=this;
   		console.log(e.currentTarget.dataset.bid);
   		aList.length=0;
   		var id=e.currentTarget.dataset.bid
   		_this.setData({
   			bid:id
   		});
   		wx.request({
   			url:`https://top.baidu.com/mobile_v2/buzz?b=${id}c=531`,
   			success:function(res){
   				console.log(res.data.result);
   				for(var i=0;i<res.data.result.topwords.length;i++){
   					var json={
   						'keyword':res.data.result.topwords[i].keyword,
   						'searches':res.data.result.topwords[i].searches,
   						'trend':res.data.result.topwords[i].trend,
   						'isNew':res.data.result.topwords[i].isNew,
   						'abstract':res.data.result.descs[i].content.data.abstract,
   						'image':res.data.result.descs[i].content.data.image
   					}
   					aList.push(json);
   				}
   				_this.setData({
   					nav:res.data.result.boards,
   					list:aList
   				});
   			}
   		});
   },
   tapwordFn:function(e){
 		var keyword=e.currentTarget.dataset.keyword;
 		app.url=`https://m.baidu.com/s?cl=3&fr=top1000&from=1011885a&sa=fyb_top&word=${keyword}`;
 		wx.navigateTo({
 			url:"/pages/index/hotlink/hotlink"
 		})
 	}
})