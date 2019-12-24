(function(){
	
	//引包
	var http=require('http');
	//读文件的
	var fs=require('fs');
	
	//读路径URL的
	var url=require('url');
	
	//创建服务器,参数是一个回调函数，表示如果有请求进来，要做什么
	var server=http.createServer(function(req,res){
		console.log(123);
		
//		//为了获取用户的url
//		//url.parse()可以将一个完整的URL地址，分成很多的部分；
//		//host,port,pathname,path
//		var pathname=url.parse(req.url).pathname;
//		//得到查询部分，由于写了ture,那么就是一个对象；
//		var query=url.parse(req.url,true).query;
//		var username=query.username;
//		var userpassword=query.userpassword;
//		res.end('服务器收到了表单请求'+username+userpassword);
		
//		//路由设计
//		//当用户访问http://127.0.0.1:8020/fengzhibuluo/webpage/register.html/username显示123
//		//得到用户的url
//		var userurl=req.url();
//		//用正则表达式来判断地址
//		if(userurl.substr(0,3)=="/123/"){
//			
//		}


//		if(){
//			//req表示请求，request;res表示响应,response
//			//设置HTTP头部，状态码200，文件类型是html，字符集UTF-8
//			res.writeHead(200,{'content-type':'text/html;charset=UTF-8'});
//			
//			
//		}else if{
//			//req表示请求，request;res表示响应,response
//			//设置HTTP头部，状态码200，文件类型是html，字符集UTF-8
//			res.writeHead(200,{'content-type':'text/html;charset=UTF-8'});
//			
//		}else{
//			//req表示请求，request;res表示响应,response
//			//设置HTTP响应头部，状态码200，文件类型是html，字符集UTF-8
//			res.writeHead(404,{'content-type':'text/html;charset=UTF-8'});
//			res.end('没有这个页面啊');
//		}
		
		
	});			
	//运行服务器
	server.listen(8020,'127.0.0.1');
})();