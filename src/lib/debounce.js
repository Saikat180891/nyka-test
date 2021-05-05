const debounce = (fn, delay) => {
  let timerId;
  return (...args) => {
    if (timerId) clearInterval(timerId);

    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export { debounce };
