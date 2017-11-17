class Foo {
  constructor() {}
  show() {
    console.log('Foo show')
  }
}

class Child extends Foo {
  constructor() {
    super()
  }
}

const child = new Child()
