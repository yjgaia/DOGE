# DOGE - DOM Game Engine
![ScreenShot](https://raw.githubusercontent.com/Hanul/DOGE/master/doge.jpg)

Galaxy Gear S2와 같은 웨어러블 기기의 경우, HTML5 Canvas나 WebGL(Gear S2의 경우 WebGL을 지원하지 않음)에서 30fps 정도로 드로잉을 하게 되면 배터리 소모가 매우 심합니다.
DOGE는 이런 경우에 DOM을 Game Object로 이용하여 배터리 소모를 줄이면서 게임을 만들 수 있는 엔진입니다.

* 한국어 발음은 "도지" 입니다.
* [UJS](https://github.com/Hanul/UJS)를 기반으로 제작되어있습니다. 따라서 [UJS](https://github.com/Hanul/UJS)의 모든 기능을 사용할 수 있습니다.

## GO
Game Object
```
var ball = GO({
	image : 'ball.png',
	x : 360
	y : 360
});
```
* `go.move({ x:, y:, centerX:, centerY:, angle: })` 이동시킵니다.
* `go.getX()` x 좌표를 가져옵니다.
* `go.getY()` y 좌표를 가져옵니다.
* `go.getCenterX()` 중점 x 좌표를 가져옵니다.
* `go.getCenterY()` 중점 y 좌표를 가져옵니다.
* `go.getAngle()` 회전 각도를 가져옵니다.
* `go.getWidth()` 너비를 가져옵니다.
* `go.getHeight()` 높이를 가져옵니다.

## [UJS](https://github.com/Hanul/UJS) 함수들 중 게임에서 쓸만한 것들
* `READY(function() {})` 모든 JS 파일들이 로드 된 이후에 실행합니다.
* `LOOP(fps, function(fps) {})` 1초에 `fps`번 함수를 실행합니다.
* `WIN_WIDTH()` 윈도우의 가로 길이를 픽셀 단위로 반환합니다.
* `WIN_HEIGHT()` 윈도우의 세로 길이를 픽셀 단위로 반환합니다.
* 이 외에 여러가지 함수들이 있습니다. [UJS-BROWSER](https://github.com/Hanul/UJS/blob/master/DOC/UJS-BROWSER.md)와 [UJS-COMMON](https://github.com/Hanul/UJS/blob/master/DOC/UJS-COMMON.md)를 참고하세요.

## 샘플
* [Ball 소스코드](samples/ball) - http://something.hanul.me/DOGE/samples/ball/ball.html
* [Wall 소스코드](samples/wall) - http://something.hanul.me/DOGE/samples/wall/wall.html
* [Touch 소스코드](samples/touch) - http://something.hanul.me/DOGE/samples/touch/touch.html
* [Map 소스코드](samples/map) - http://something.hanul.me/DOGE/samples/map/map.html

## 타이젠에서 유용한 코드들
### 화면이 꺼지거나 다른 앱을 켤 때
```javascript
EVENT('visibilitychange', function() {
	if (HIDDEN() === true) {
		loop.pause();
	} else {
		loop.resume();
	}
});
```

### 뒤로가기 시 앱 종료
```javascript
EVENT('tizenhwkey', function(e) {
	if (e.getKeyName() === 'back') {
		try {
            tizen.application.getCurrentApplication().exit();
        } catch (ignore) {}
	}
});
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)