const { InstructionManager } = require('../managers/InstructionManager');
const { Task } = require('./Lexer');
const { Scope } = require('./Scope');

const MAIN_FUNCTION = 'MAIN_FUNCTION';

/**
 * Interpretes HytaneJS code.
 */
class Interpreter {
    /**
     * Runs the provided scope.
     * @param {Task[]} tasks - The tasks to compile.
     * @param {Scope} scope - The scope to run.
     * @returns {Promise<string>}
     */
    static async run(tasks, scope) {
        // Compile the content of the main function.
        if (tasks[0].name === MAIN_FUNCTION) {
            return await Interpreter.run(tasks[0].overloads, scope);
        }

        // Get the content to solve.
        let output = scope.command.code;

        // Compile each overload.
        for (let idx = 0; idx < tasks.length; idx++) {
            // Getting the current task.
            const task = tasks[idx];

            // Stop the execution of code if allowed.
            if (scope.mustStop) break;
        }

        // Return the result.
        return output.trim();
    }
};

module.exports = {
    Interpreter,
    MAIN_FUNCTION,
};
