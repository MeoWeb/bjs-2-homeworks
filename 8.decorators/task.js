function cachingDecoratorNew(func) {
    let cache = {};

    return function wrapper(...args) {
        const hash = args.join(',');
        if (hash in cache) {
            console.log("Из кеша: " + cache[hash]);
        } else {
            let result = func.call(this, ...args);
            cache[hash] = result;
            console.log("Вычисляем: " + result);
        }
        if (Object.keys(cache).length > 5) {
            const key = Object.keys(cache);
            delete cache[key[0]];
        }
    }
}

function debounceDecoratorNew(func, ms) {
    let timer;
    let flag = false;

    return function wrapper(...args) {

        if (!flag) {
            func(...args);
            flag = true;
        } else {
            timer = setTimeout(() => func(...args), ms);
            ms += 2000;
        }

    }
}


function debounceDecorator2(func, ms) {
    let timer;
    let count = 0;
    let flag = false;


    return function wrapper(...args) {
        if (!flag) {
            func(...args);
            flag = true;
            count += 1;
            console.log(count);
        } else {
            timer = setTimeout(() => func(...args), ms);
            ms += 2000;
            count += 1;
            console.log(count);
        }
    }
}