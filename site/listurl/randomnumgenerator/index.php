<!DOCTYPE html>
<html>
	<?php
		session_start();
		//create log files
		$time=exec("date");
		$ipout=$_SERVER['REMOTE_ADDR'];
		if($_SESSION['ssid']==NULL){       
			exec("echo '[".$time."] [".$ipout."] Visit /listurl/randomnumgenerator ' >>/home/webaccounts/userrequest/accepted/anonymous/log");
		}else{
			exec("echo '[".$time."] [".$ipout."] Visit /listurl/randomnumgenerator ' >>/home/webaccounts/userrequest/accepted/'".$_SESSION['ssid']."'/log");
		}
		//create log files//
	?>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-6QDEP0H0ZJ"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-6QDEP0H0ZJ');
	</script>
        <head>
			
            <meta charset="utf-8"/>
	        <title>線上亂數產生器</title>
	        <link href="/module/style.css" rel="stylesheet" >
			<meta name="google-site-verification" content="wckxJU1daLfK2yDVIT6UCxz-rm2UXiye6-nG_5onam0" />
        </head>
        <body>
			
            <div class="wrap">
                <div class="header" id="top">
                    <h1>線上亂數產生器</h1>
                </div>
                <div class="content">
                    <div class="left">
						
                    </div>
                    <div class="center">
						<p>輸入要輸輸出的隨機數字量</p>
						<input id="amount" type="number" placeholder="輸入數字量" min="1">
						<p>輸入數字下限</p>
						<input id="min" type="number" placeholder="輸入數字下限" min="-10000">
						<p>輸入數字上限</p>
						<input id="max" type="number" placeholder="輸入數字上限" max="10000">
						<br/>
						<br/>
						<button type="button" onclick="generate()">
							立即生成!!
						</button>
						<h4>生成的數字:</h4>
						<div style="border: 1px solid; width: 700px; font-size: 15px;">
							<pre id="output"></pre>
						</div>
						<hr/>
						<h4>使用說明:</h4>
						<div style="border: 1px solid; width: 700px; font-size: 15px;">
							<ol start="1" type="1">
								<li>
									功能:
									<br/>
									&emsp;&emsp;此工具可以用於產生指定數量的隨機整數。
								</li>
								<li>
									參考資源:
									<br/>
									&emsp;&emsp;<a target="_blank" href="https://ithelp.ithome.com.tw/articles/10197904">[筆記][JavaScript]用Math.random()取得亂數的技巧</a>
								</li>
								<li>
									原始碼下載:
									<br/>
									By Github:<a target="_blank" href="https://github.com/tseng91301/randomnumgenerator">點此查看</a>
								</li>
							</ol>
						</div>
					</div>
                </div>
                
                <div class="clearfix"></div>
                <div class="footer" id="footer">
				</div>
            </div>
			<script src="/listurl/randomnumgenerator/js/main.js"></script>
			<script src="/module/jquery.min.js"></script>
			<script>
				$(function(){
					/*公共部分
					 * 導航欄
					 * footer CopyRight
					 */
					$(".left").load("/module/content.php");
					$(".footer").load("/module/footer.html");
					
				});
			</script>
        </body>
</html>