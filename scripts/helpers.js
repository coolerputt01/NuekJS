// Import the file to make sure NuekComponent is attached to window
import "./main.js";

/**
 * Factory function to simplify NuekComponent instantiation.
 *
 * @param {Object} options - Configuration options for rendering components.
 * @param {string} options.target - The DOM selector where the component will render (default: "#app").
 * @param {number} options.loop - Number of times to instantiate the component (default: 1).
 * @param {boolean} options.condition - Whether to render the component (default: true).
 * @returns {Function} - A render function that accepts a file path and optional props.
 *
 * @example
 * const render = createComponent({ target: "#content", loop: 3 });
 * render("/components/card.html", { title: "Hello" });
 */
const createComponent = ({
  target = "#app",
  loop = 1,
  condition = true
} = {}) => {
  return function (path, props = {}) {
    return new window.NuekComponent(target, path, props, loop, condition);
  };
};

export { createComponent };
