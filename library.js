var a = 10;
export default a;
//JS 파일에서는 특정 변수를 다른 파일에서 이용할 수 있게 내보내고 싶으면 export default 변수명
//그리고 그 변수를 가져다쓰고 싶다면 다른 파일에서 import 어쩌구 from '경로' 해주면 됌
//import시 a 변수명은 여러분 아무렇게나 작명이 가능

//(2)
var a = 10;
var b = 20;
export { a, b };
//export 라고 쓰실 땐 export {변수명1, 변수명2 ...} 이렇게 담아야함 혹은 export var a = 10; 이렇게 써도 가능
//export 키워드로 내보낸 것들을 import 하실 땐 import {변수명1, 변수명2 ...} from '경로' 이렇게 가져야함
//export default와 차이점
//1.export default는 한번만 쓸 수 있고 import시엔 변수명을 새롭게 작명가능하다
//2.export는 {변수명1, 변수명2 ...} 이렇게 담아야하고 import 할 때도 정확히 변수명을 써줘야한다

//(3)
var a = 10;
var b = 20;
var c = 30;
export {a, b};
export default c;

//(4)
var a = 10;
var c = 30;
export {a};
export default c;

//(5)
var a = 10;
var b = 20;
var c = 30;
export {a,b};
export default c;