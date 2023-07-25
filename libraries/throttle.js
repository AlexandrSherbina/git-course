export default function throttle(fn, ms) {
    let isThrottled = false;
   let saveArgs;
   let saveThis;

    function wrapper() {
        if (isThrottled) {
            saveArgs = arguments;
            saveThis = this;
            return;
        }

        fn.apply(this, arguments);
        isThrottled = true;

        setTimeout(function () {
            isThrottled = false;
            if (saveArgs) {
                wrapper.apply(saveThis, saveArgs)
                saveThis = saveArgs = null;
            }
        }, ms)
    }
    console.count('throttle')
    return wrapper;
}