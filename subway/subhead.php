<? 
$G5_PATH="./gnuboard5";
include_once($G5_PATH.'/common.php');
include_once($G5_PATH.'/head.sub.php');
include_once($G5_PATH.'/lib/outlogin.lib.php');
?>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subway</title>
  <link rel="stylesheet" href="/css/free.css">
</head>
<body>
 <div id="wrap">
  <header>
      <div class="hinner">
        <a href="index.html">
          <p class="logo">
            <img src="./img/logo.png" alt="" />
          </p>
        </a>
        <ul class="menu">
          <li><a href="#"  target="_new">메뉴소개</a></li>
          <li><a href="#"  target="_new">이용방법</a></li>
          <li><a href="#"  target="_new">새소식</a></li>
          <li><a href="#"  target="_new">써브웨이</a></li>
          <li><a href="#"  target="_new">가맹점</a></li>
          <li><a href="#"  target="_new">온라인 주문</a></li>
          <li><a href="free.html"  target="_new">문의하기</a></li>
          <li><a href="login.html"  target="_new"><?php
        if ($is_member) {
        echo '<a href="/mylogin.php">' . $member['mb_id'] . '</a> 님';
        } else {
            echo "로그인";
        }
            ?>
            </a>
          </li>
        </ul>
      </div>
    </header>