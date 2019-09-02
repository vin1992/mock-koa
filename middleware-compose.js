// const compose = require("koa-compose");
/* 
function compose(middleware) {
  if (!Array.isArray(middleware))
    throw new TypeError("Middleware stack must be an array!");
  for (const fn of middleware) {
    if (typeof fn !== "function")
      throw new TypeError("Middleware must be composed of functions!");
  }

  return function(a, b) {
    // last called middleware #
    let index = -1;

    return dispatch(0);

    function dispatch(i) {
      if (i <= index) {
        console.log("i <= index");
        return Promise.reject(new Error("next() called multiple times"));
      }
      index = i;
      let fn = middleware[i];
      if (i === middleware.length) fn = b;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(a, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
} */

function compose(middleware) {
  function dispatch(index) {
    if (index == middleware.length) return;
    var curr;
    curr = middleware[index];
    // 这里使用箭头函数，让函数延迟执行
    return curr(function() {
      return dispatch(++i);
    });
  }
  dispatch(0);
}

const m1 = cb => {
  console.log("m1");
  cb();
};

const m2 = cb => {
  console.log("m2");
  cb();
};

const m3 = cb => {
  console.log("m3");
  cb();
};

compose([m1, m2, m3]);
