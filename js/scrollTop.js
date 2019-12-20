	(function(){
		window.onload=function(){
		var oA=document.getElementsByTagName('a')[0];
		var timer=null;
		var speed=0;
		var flg=true;
		
		window.onscroll=function(){
			var scroll=document.documentElement.scrollTop||document.body.scrollTop;
			
			if(scroll>=600){
				oA.style.display='block';
			}else{
				oA.style.display='none';
			}
			
			//通过鼠标滚轮自由控制滚动条（停止定时器）；
			if(!flg){
				clearInterval(timer);
			}
			flg=false;//频率：定时器的时间内可以触发多次onscrool事件；
		};
		
		oA.onclick=function(){
			timer=setInterval(function(){
				
				var scroll=document.documentElement.scrollTop||document.body.scrollTop;
				
				speed=scroll/5;
				
				document.documentElement.scrollTop=scroll-speed;
				//document.body.scrollTop=0;
				//document.documentElement.scrollTop||document.body.scrollTop=0;
				
				//如果scrolltop为0是关闭定时器；
				if(scroll==0){
					clearInterval(timer);
				}
				flg=true;
			},20);
			
		
		};
		
		//增强视觉体验
		var canvas=document.getElementById('canvas');
		c=canvas.getContext('2d');
		g1=c.createLinearGradient(30,10,30,50);
		g1.addColorStop(0,'black');
		g1.addColorStop(1,'white');
		c.fillStyle=g1;  
		c.arc(30,30,20,Math.PI/2,Math.PI*1.5);
		c.arc(30,20,10,Math.PI/2,Math.PI*1.5,true);
		c.arc(30,40,10,Math.PI*1.5,Math.PI/2,true);
		c.fill();
		
		c.beginPath();
		g2=c.createLinearGradient(30,10,30,50);
		g2.addColorStop(0,'white');
		g2.addColorStop(1,'black');
		c.fillStyle=g2;
		c.arc(30,30,20,Math.PI/2,Math.PI*1.5,true);
		c.arc(30,40,10,Math.PI/2,Math.PI*1.5);
		c.arc(30,20,10,Math.PI*1.5,Math.PI/2);
		c.fill();
		
		c.beginPath();
		g3=c.createRadialGradient(30,20,1.5,30,20,23);
		g3.addColorStop(0,'white');
		g3.addColorStop(1,'black');
		c.fillStyle=g3;
		c.arc(30,20,3,0,Math.PI*2);
		c.fill();
		
		c.beginPath();
		g4=c.createRadialGradient(30,40,1.5,30,40,23);
		g4.addColorStop(0,'black');
		g4.addColorStop(1,'white');
			c.fillStyle=g4;
			c.arc(30,40,3,0,Math.PI*2);
			c.fill();
		};
		
		
		
		
		
		
	})();