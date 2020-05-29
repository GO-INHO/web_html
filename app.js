$(document).ready(function () {
  $('#smoothed').signaturePad({
    drawOnly: true,
    drawBezierCurves: true,
    lineTop: 200
  });
});

AWS.config.region = 'ap-northeast-2';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-northeast-2:0e55215d-0f37-4021-936d-79293d796d4d'
})

AWS.config.credentials.get(function(err) {
    if (err) alert(err);
    console.log(AWS.config.credentials);
});

var bucketName = 'inho-s3-folder'; // Enter your bucket name

var bucket = new AWS.S3({
    params: {
        Bucket: bucketName
    }
});

function saveAs(uri, filename) {
  // 캡쳐된 파일을 이미지 파일로 내보낸다.
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  else {
    window.open(uri);
  }
}

$("#shot").on("click", function () {
  // 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
  html2canvas(document.querySelector("#capture")).then(function (canvas) {
    console.log(document.getElementById('name').value)

    var name = "위임장-" + document.getElementById('name').value + ".png"
    saveAs(canvas.toDataURL('image/png'), name);

    var base64Image = canvas.toDataURL('image/png')
    var blobBin = atob(base64Image.split(',')[1]);

    var array = [];
    for (var i = 0; i < blobBin.length; i++) {
      array.push(blobBin.charCodeAt(i));
    }
    var file = new Blob([new Uint8Array(array)], {type: 'image/png'});	// Blob 생성
    var formdata = new FormData();	// formData 생성
    formdata.append("file", file);	// file data 추가

    if(file) {
        var objKey = 'images/' + name;
        var params = {
            Key: objKey,
            ContentType: 'image/png',
            Body: file,
            ACL: 'public-read'
        };

            
      bucket.putObject(params, function (err, data) {
        if (!err) {
          alert('서버에 전송 완료 했습니다.')
        } else {
          alert(JSON.stringify(err))
        }
      })
    } 
  });
});
