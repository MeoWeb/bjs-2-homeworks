function cachingDecoratorNew(func) {
    let cache = {};

    function wrapper(...args) {
        const hash = args.join(',');
        if (hash in cache) {
            console.log("Из кеша: " + cache[hash]);
            return "Из кэша: " + cache[hash];
        } else {
            let result = func.call(this, ...args);
            cache[hash] = result;
            if (Object.keys(cache).length > 5) {
                const key = Object.keys(cache);
                delete cache[key[0]];
            }
            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;
        }
    }
    return wrapper;
}


function debounceDecoratorNew(func, ms) {
    let timer;
    let flag = false;

    return function wrapper(...args) {
        if (!flag) {
            flag = true;
            timer = setTimeout(() => {
                func(...args)
                flag = false;
            }, ms);
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), ms);
        }
    }
}


function debounceDecorator2(func) {
    let timer;
    let flag = false;

    return function wrapper(...args) {
        if (!flag) {
            flag = true;
            timer = setTimeout(() => {
                flag = false
                wrapper.count.push()
                return func.call(this, ...args)
            }, ms);
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), ms);
        }
        wrapper.count = [];
    }
}