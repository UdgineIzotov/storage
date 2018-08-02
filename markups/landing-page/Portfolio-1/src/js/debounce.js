/**
 * 
 * @param {function} fucn - function to debounce
 * @param {number} ms - debounce time in ms
 */
export const debounce = (fucn, ms) =>  {

  let timer = null;

  return (...args) => {

    const onComplete = () => {
      fucn.apply(this, args);
      timer = null;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
}