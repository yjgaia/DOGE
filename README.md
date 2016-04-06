# DOGE - DOM Game Engine
Galaxy Gear S2와 같은 웨어러블 기기의 경우, HTML5 Canvas나 WebGL(Gear S2의 경우 WebGL을 지원하지 않음)에서 30fps 정도로 드로잉 하게 되면 배터리 소모가 너무 심합니다.
DOGE는 이런 경우에 DOM을 Game Object로 이용하여 배터리 소모를 줄이면서 게임을 만들 수 있도록 하는 엔진입니다.

[UJS](https://github.com/Hanul/UJS)를 기반으로 제작되어있습니다. 따라서 [UJS](https://github.com/Hanul/UJS)의 모든 기능을 사용할 수 있습니다.

## GO
Game Object
```
var ball = GO({
	image : 'ball.png',
	x : 360
	y : 360
});
```
* `go.move` 이동시킵니다.

## [UJS](https://github.com/Hanul/UJS) 함수들 중 게임에서 쓸만한 것들
* `LOOP(fps, function(fps) {})` 1초에 `fps`번 함수를 실행합니다.

## 샘플
* [Ball](samples/ball)

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)