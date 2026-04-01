export { homepage }

function homepage() {
  // 哦吼吼！终于实现了！
  var HTMLContent = `
<html>
  <head>
    <meta charset="UTF-8">
    <title>欢迎</title>
  </head>
  <body>
    <h1>什么也没有</h1>
    敬请期待……（正在因为加密问题而左右脑互搏）
    <br>
    （往下面闲的没事装个人机验证试试）
    <form method="POST">
      <div class="h-captcha" data-sitekey="4378b196-a7fc-4742-bf06-1dee4ebebc3e"></div>
      <script src="https://js.hcaptcha.com/1/api.js" async defer>
      </script>
    </form>
    <br>
    <b>陈子鸣</b>你还我满分……
    <br>
    <b>Chen Ziming</b>, send back my full mark......
  </body>
</html>
`;
  return HTMLContent
}
