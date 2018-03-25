// class MathHandle {
//     constructor(x, y) {
//         this.x = x
//         this.y = y
//     }
//     add() {
//         return this.x + this.y
//     }
// }

// const m = new MathHandle(1, 2)

// console.log(typeof MathHandle)  // 'function'
// console.log(MathHandle.prototype.constructor === MathHandle)  // true
// console.log(m.__proto__ === MathHandle.prototype)  // true

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     eat() {
//         alert(this.name + ' eat')
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name)   // 注意 ！！！
//         this.name = name
//     }
//     say() {
//         alert(this.name + ' say')
//     }
// }

// const dog = new Dog('哈士奇')
// dog.say()
// dog.eat()

// function fn() {
//     console.log('real', this)  // real {a: 100}

//     var arr = [1, 2, 3]
//     arr.map(item => {
//         console.log(this)  // {a: 100}
//     })
// }
// fn.call({a: 100})

// real {a: 100}
// {a: 100}
// {a: 100}
// {a: 100}
