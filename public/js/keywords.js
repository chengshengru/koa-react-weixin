var addK = document.querySelector('.add-k');
var temp = "<div class='zf-modal' style='border-radius: 10px;background:rgba(255,255,255,1)'><form action='/weixin/addK' method='POST'><div class='modal-header' style='padding: 9px 15px;border-bottom: 1px solid #eee'><h3 style='margin:0'>创建自动回复</h3></div><div class='modal-main' style='padding:15px'><input id='title' type='text' name='key' placeholder='关键字' style='display:block;width:100%;margin: 10px 0px;padding: 10px 12px;border:1px solid #ccc;border-radius: 4px;'></div><div class='lab-issue-submit' style='padding:0 15px'><textarea class='text-input' id='lab-create-input' name='val' rows='8' cols='55' placeholder='请输入回复内容' style='border:1px solid rgba(0,0,0,0.2)'></textarea><div id='lab-preview-input' class='preview'></div></div><div class='modal-footer' style='padding:14px 15px 15px;background-color: #f5f5f5;border-top:1px solid #ddd;box-shadow: inset 0 1px 0 #ffffff;border-bottom-left-radius:10px;border-bottom-right-radius:10px;overflow: hidden;'><button type='submit' id='submit' class='btn btn-success' style='float: right' onclick='createK()'>Submit</button><button id='close' class='btn' style='margin-right: 10px; float: right;' onclick='removeCon()'>Close</button></div></form></div>";
addK.addEventListener('click', function() {
  zfAlert(temp, '', 0, 0);
}, false);

function createK() {
  var key = document.getElementById('title').value;
  var val = document.getElementById('lab-create-input').value;
  if (key.trim() === '' || val.trim() === '') {
    alert('关键字或者回复，不能为空');
  } else {
    fetch('/weixin/addK', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'key=' + key + '&val=' + val
    });
  }

}