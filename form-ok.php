<!DOCTYPE html>
<html>
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
	<title>Спецпредложение от нашего интернет-магазина, товары по супер цене!</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<link href="upsell/img/favicon.ico" rel="icon" type="image/x-icon">
	<link href="upsell/img/favicon.ico" rel="shortcut icon" type="image/x-icon">
	<script src="upsell/js/jquery.min.js" type="text/javascript"></script>
	<script src="upsell/js/jquery.placeholder.js" type="text/javascript"></script>
	<script src="upsell/js/init.js" type="text/javascript"></script>
	<script src="index_files/jquery.cookie.js"></script>
	<link href="upsell/css/index.css" media="all" rel="stylesheet" type="text/css">

</head>
<body class="man">
<?php
$only_phone = preg_replace("/[^0-9]/", '', $_REQUEST['phone']); 
?>
<script type="text/javascript">
$.cookie('duble', <?=$only_phone?>, { expires: 1 });
</script> 
	<img alt="cookie" border="0" height="1" src="index.php" style="display: none;" width="1">
	<div class="section block-1" style='background:rgb(241, 244, 246) none repeat scroll 0% 0%;   text-align: center; '>
		<div class="wrap" style=' height: 415px;'>
			<div class="top-title"> 
				<h2>Спасибо, Ваш заказ принят!</h2> 
				<div>
					Наш оператор свяжется с вами в течение 30&nbsp;минут
				</div>
				<div>
					<p>Вы указали следующие контактные данные:</p>
					<p><b style='font-weight: bold;'>Имя:</b> <?=$_REQUEST['name']?></p>
					<p><b style='font-weight: bold;'>Телефон:</b> <?=$_REQUEST['phone']?></p>
				</div>										
				<p>Если вы допустили ошибку, <br>вернитесь на сайт и оставьте заказ еще раз</p>
				<button style='    background: transparent linear-gradient(to bottom, #14b1f1 0%, #14b1f1 100%) repeat scroll 0 0;border: none;border-bottom: 2px solid #055029;outline: 0 none;padding: 15px 25px;text-transform: uppercase;color: #fff;font-weight: bold;border-radius: 4px;cursor: pointer;}' class=" button thankyou__button" onclick="history.back()">Вернуться</button>  
				
			</div>
		</div>
	</div>
	

</body>
</html>