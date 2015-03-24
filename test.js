function Person(){

	this.move=function (direction,seat,img=null,url=null){
		switch(direction){
			case 0:
				var seat = parseInt(seat.substr(0,seat.length-2));
					seat = seat+20+"px";
				var	img =  parseInt(img.substr(0,img.length-4));
					if(img<100){
						img = img+50+"% 0%";
					}else if(img>=100){
						img = img-100+"% 0%";
					}
					if(url !="url(\"file:///D:/game/move.png\")"){
					var	url = url.substr(0,url.length-11);
						url = url+".png\")";
					}
				var res = new Array(seat,img,url);
					return res;
			break;
			case 1:
				var seat = parseInt(seat.substr(0,seat.length-2));
					seat = seat-20+"px";
				var img = parseInt(img.substr(0,img.length-4));
					if(img<100){
					img = img+50+"% 0%";
					}else if(img>=100){
					img = img-100+"% 0%";
					}
					if(url !="url(\"file:///D:/game/move-left.png\")"){
					var	url = url.substr(0,url.length-10);
						url = url+"move-left.png\")";
					}
				var res = new Array(seat,img,url);
					return res;
			break;
			case 2:
			break;
			case 4:
			break;
		}
	}
}
