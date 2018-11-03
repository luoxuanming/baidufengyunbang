var app=getApp();
var aList=[];
Page({
  data: {
  	nav:[],
  	list:[],
  	bid:1602
  },
  onLoad:function(){
  	var _this=this;
  	wx.request({
  		url:"https://top.baidu.com/mobile_v2/buzz?b=1602&c=529",
  		success:function(res){
  			console.log(res.data.result);
  			for(var i=0;i<res.data.result.topwords.length;i++){
 					var json={
 						'keyword':res.data.result.topwords[i].keyword,
 						'searches':res.data.result.topwords[i].searches,
 						'trend':res.data.result.topwords[i].trend,
 						'gentime':res.data.result.topwords[i].gentime,
 						'actors':res.data.result.descs[i].content.actors,
 						'desc':res.data.result.descs[i].content.desc,
 						'director':res.data.result.descs[i].content.director,
 						'image':res.data.result.descs[i].content.image,
 						'time':res.data.result.descs[i].content.time,
 						'playlink':res.data.result.descs[i].content.playlink,
 						'type':res.data.result.descs[i].content.type,
 						'upto':res.data.result.descs[i].content.upto,
 						'area':res.data.result.descs[i].content.area
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
 			url:`https://top.baidu.com/mobile_v2/buzz?b=${id}&c=515`,
 			success:function(res){
 				console.log(res.data.result);
 				for(var i=0;i<res.data.result.topwords.length;i++){
 					var json={
 						'keyword':res.data.result.topwords[i].keyword,
 						'searches':res.data.result.topwords[i].searches,
 						'trend':res.data.result.topwords[i].trend,
 						'gentime':res.data.result.topwords[i].gentime,
 						'actors':res.data.result.descs[i].content.actors,
 						'desc':res.data.result.descs[i].content.desc,
 						'director':res.data.result.descs[i].content.director,
 						'image':res.data.result.descs[i].content.image,
 						'time':res.data.result.descs[i].content.time,
 						'playlink':res.data.result.descs[i].content.playlink,
 						'type':res.data.result.descs[i].content.type,
 						'upto':res.data.result.descs[i].content.upto,
 						'area':res.data.result.descs[i].content.area
 					}
 					aList.push(json);
 				}
// 				console.log(aList);
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
 		});
 	},
 	playertapFn:function(e){
 		console.log(e.currentTarget.dataset.playlink);
 		var playlink=e.currentTarget.dataset.playlink;
 		app.url=playlink;
 		wx.navigateTo({
 			url:"/pages/index/hotlink/hotlink"
 		});
 	}
})