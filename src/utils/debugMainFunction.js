const { Task } = require('../classes/core/Lexer');  

/**
 * @template Values
 * @param {Task} task - The task to check.
 * @param {Values} values - The values to inherit.
 * @param {(args: Values) => void} cb - The callback to run.
 */
const debugMainFunction = (task, values, cb) => {
    if (task.name === 'MAIN_FUNCTION') cb(values);
};

module.exports = {
    debugMainFunction,
};
