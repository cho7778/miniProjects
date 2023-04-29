// javascript class를 funcition으로 변환해보기: https://zereight.tistory.com/1127
// [JavaScript] Class vs Function Constructor: https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=jdub7138&logNo=221028381283

// case1: 클래스를 function으로 변환

class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function A(x, y) {
    this.x = x;
    this.y = y;
}

// case2 : arrow function
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    say() {
        return "say";
    }

    speak: () => {
    	return "speak";
    }
    
    
}

function A(x, y) {
    this.x = x;
    this.y = y;
    this.speak = () => {
        return "speak";
    }

    A.prototype.say = function () {
        return say;
    }
}

// case3: 상속 
class B extends A {
    constructor(x, y) {
        super(x, y);
    }
}

function B(x, y) {
    A.call(this, x, y);
}

// 1
B.prototype = new A();

// 2
B.prototype = Object.create(A.prototype);
B.prototype.constructor = A;


// "class에서 arrow function을 메서드로 사용하는 것은 성능면이나 상속 시 오버라이딩할때의 문제
// 1. 성능

// 메서드가 prototype에 저장되면, 모든 인스턴스가 prototype에 정의된 함수만 사용하므로 한번만 정의하는 것인데

// arrow function으로 선언되면 인스턴스가 생성될떄마다 새롭게 메서드가 생기는 꼴이다.

// 2. 상속시 오버라이딩 문제

// 1와 연관되는 문제로, 메서드를 arrow function으로 상속받았는데, 일반 function 메서드로 오버라이딩하고 있다?

// 그러면 상속된 메서드는 prototype이 아니라 this에 저장되어있으므로 prototype에 일반함수로 오버라이딩하려한 메서드는 호출되지도 않고 바로 this에 있는 상속받은 arrow function 메서드가 실행되게 됩니다.


// 