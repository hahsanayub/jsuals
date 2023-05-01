function select(selector) {
    return document.querySelector(selector)
}
function test() {
    console.log('test')
}

const selector = {
    select: select,
    testFunc: test
}
export default selector;