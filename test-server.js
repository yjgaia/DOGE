var PORT = 8410;

var s = require('http').createServer(handler), fs = require('fs'), path = require('path');

// Server Handler
function handler(req, res) {

	var url = req.url;
	if (url.indexOf('?') !== -1) { // eliminate param.
		url = url.substring(0, url.indexOf('?'));
	}
	if (url === '/') { // root
		url = '/index.html';
	}

	var filepath = './' + url // 파일 경로
	, extname = path.extname(filepath) // 확장자
	, contentType = 'text/html';

	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.jpg':
		case '.jpeg':
			contentType = 'image/jpeg';
			break;
		case '.png':
			contentType = 'image/png';
			break;
	}

	fs.exists(filepath, function(exists) {
		if (exists) {
			fs.readFile(filepath, 'binary', function(err, data) {
				if (err === null) {
					res.writeHead(200, {
						'Content-Type' : contentType
					});
					res.write(data, 'binary');
					res.end();
				} else { // 에러 발생
					res.writeHead(500, {
						'Content-Type' : 'text/plain'
					});
					res.write(err.toString());
					res.end();
				}
			});
		} else { // 존재하지 않는 자원 접근
			res.writeHead(404, {
				'Content-Type' : 'text/plain'
			});
			res.write('404 Not Found.');
			res.end();
		}
	});
}

s.listen(PORT);
console.log('Started DOGE test server! http://localhost:' + PORT);