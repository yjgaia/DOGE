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
* `go.move({ x:, y:, centerX:, centerY:, angle:, scale: })` 이동시킵니다.
* `go.getX()` x 좌표를 가져옵니다.
* `go.getY()` y 좌표를 가져옵니다.
* `go.getCenterX()` 중점 x 좌표를 가져옵니다.
* `go.getCenterY()` 중점 y 좌표를 가져옵니다.
* `go.getAngle()` 회전 각도를 가져옵니다.
* `go.getScale()` 크기 비율을 가져옵니다.
* `go.getWidth()` 너비를 가져옵니다.
* `go.getHeight()` 높이를 가져옵니다.

## TILE
Tile
```
var tile = TILE({
	image : 'tile.jpg',
	x : WIN_WIDTH() / 2,
	y : WIN_HEIGHT() / 2,
	centerX : 300 * 2.5,
	centerY : 300 * 2.5,
	xCount : 5,
	yCount : 5
});
```
* `tile.move({ x:, y:, centerX:, centerY:, angle:, scale: })` 이동시킵니다.
* `tile.getX()` x 좌표를 가져옵니다.
* `tile.getY()` y 좌표를 가져옵니다.
* `tile.getCenterX()` 중점 x 좌표를 가져옵니다.
* `tile.getCenterY()` 중점 y 좌표를 가져옵니다.
* `tile.getXCount()` x 축 타일 개수를 가져옵니다.
* `tile.getYCount()` y 축 타일 개수를 가져옵니다.
* `tile.getAngle()` 회전 각도를 가져옵니다.
* `tile.getScale()` 크기 비율을 가져옵니다.
* `tile.getWidth()` 너비를 가져옵니다.
* `tile.getHeight()` 높이를 가져옵니다.

## [UJS](https://github.com/Hanul/UJS) 함수들 중 게임에서 쓸만한 것들
* `READY(function() {})` 모든 JS 파일들이 로드 된 이후에 실행합니다.
* `LOOP(fps, function(fps) {})` 1초에 `fps`번 함수를 실행합니다.
* `WIN_WIDTH()` 윈도우의 가로 길이를 픽셀 단위로 반환합니다.
* `WIN_HEIGHT()` 윈도우의 세로 길이를 픽셀 단위로 반환합니다.
* `SOUND({mp3:, ogg:, isLoop:})` 사운드를 재생하는 클래스입니다. `play`로 사운드를 재생하고 `stop`으로 재생을 멈춥니다. [사운드 캐싱하기](https://github.com/Hanul/DOGE/wiki/%EC%82%AC%EC%9A%B4%EB%93%9C-%EC%BA%90%EC%8B%B1%ED%95%98%EA%B8%B0)

    ```javascript
    var
    // sound
    sound = SOUND({
        mp3 : 'test.mp3',
        // ogg : 'test.ogg' // 타이젠은 mp3만 인식합니다.
        isLoop : true
    });
    
    sound.play()
    
    sound.stop()
    ```
    
* 이 외에 여러가지 함수들이 있습니다. [UJS-BROWSER](https://github.com/Hanul/UJS/blob/master/DOC/UJS-BROWSER.md)와 [UJS-COMMON](https://github.com/Hanul/UJS/blob/master/DOC/UJS-COMMON.md)를 참고하세요.

## 샘플
* [Ball 소스코드](samples/ball) - http://something.hanul.me/DOGE/samples/ball/ball.html
* [Wall 소스코드](samples/wall) - http://something.hanul.me/DOGE/samples/wall/wall.html
* [Touch 소스코드](samples/touch) - http://something.hanul.me/DOGE/samples/touch/touch.html
* [Map 소스코드](samples/map) - http://something.hanul.me/DOGE/samples/map/map.html
* [Tile 소스코드](samples/tile) - http://something.hanul.me/DOGE/samples/tile/tile.html

## 타이젠(Gear S2)에서 유용한 코드들
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

### 베젤을 돌릴 때
```javascript
EVENT('rotarydetent', function(e) {
	if (direction === 'CW') {
		...
	} else if (direction === 'CCW') {
		...
	}
});
```

### 화면 계속 켜두기
`config.xml`에 `privilege`에 `http://tizen.org/privilege/power`를 설정해 주어야 동작합니다.
```javascript
tizen.power.request('SCREEN', 'SCREEN_NORMAL');
EVENT('visibilitychange', function() {
	if (HIDDEN() === true) {
		tizen.power.request('SCREEN', 'SCREEN_NORMAL');
	}
});
```

## 테스트 서버 실행 (test-server.js)
`node`로 테스트 서버를 실행할 수 있습니다.
```
node test-server.js
```
`http://localhost:8410`에 접속합니다.

### Gear S2 Emulator
테스트 서버에는 Gear S2 Emulator가 포함되어 있습니다. `http://localhost:8410/gear-s2-emulator.html`에 접속합니다. 마우스 휠을 돌리면 베젤을 돌리는 것과 같은 이벤트가 발생합니다.
* `gear-s2-emulator.html` 파일 내 `samples/bezel/bezel.html` 경로를 본인의 프로젝트에 맞게 변경해 주시기 바랍니다.

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)