const { InstructionManager } = require('../managers/InstructionManager');
const { Scope } = require('./Scope');

/**
 * Interpretes HytenaJS code.
 */
class Interpreter {
    /**
     * Runs the provided scope.
     * @param {Scope} scope - The scope to run.
     * @returns {Promise<string>}
     */
    static async run(scope) {
        let output = '';
        const tasks = scope.command.__compiled__ ?? [];
        let mainFunction = tasks[0]?.inside ?? '';

        // Compiling every overload of the main function.
        for (let idx = 0; idx < tasks[0]?.overloads.length; idx++) {
            const task = tasks[0].overloads[idx];
            const data = InstructionManager.fetch(task.name);
            if (!data) {
                throw new Error(`"${task.name}" is not a function.`);
            };

            const result = await data.run(task, scope, task.fields ?? undefined);
            mainFunction = mainFunction.replace(task.toString, result ?? '');
        };

        return mainFunction;
    }
};

module.exports = {
    Interpreter,
};
