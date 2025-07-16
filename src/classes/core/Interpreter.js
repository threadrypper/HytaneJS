const { InstructionManager } = require('../managers/InstructionManager');
const { Task } = require('./Lexer');
const { Scope } = require('./Scope');

const MAIN_FUNCTION = 'MAIN_FUNCTION';

/**
 * Interpretes HytenaJS code.
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
            
            // Checking if the data of this instruction exists.
            if (task.data === null) {
                throw new Error(`"${task.name}" is not a function!`);
            }

            // Checking for nullish fields to run right now.
            if (task.fields === null && task.data.parameters) {
                const requiredArgs = task.data.parameters.filter((a) => a.optional === false);
                throw new Error(`"${task.name}" expects "${requiredArgs.length}" parameters but got "0"!`);
            };

            // Checking for enough parameters.
            const requiredArgs = (task.data.parameters ?? []).filter((a) => a.optional === false).length;
            const gotArgs = task.fields.length;
            if (requiredArgs > gotArgs) {
                throw new Error(`"${task.name}" expects "${requiredArgs}" parameters but got "${gotArgs}"!`);
            };

            // Parsing the task fields.
            const fields = task.fields ?? [];
            /** @type {string[]} */
            const parsedFields = [];
            let fieldIdx = 0;
            for (const field of fields) {
                // Copying the field value.
                let parsedValue = field;
                const overloads = task.overloads.filter((o) => o.from === fieldIdx);
                if (overloads.length === 0) {
                    parsedFields.push(parsedValue);
                    fieldIdx++;
                    continue;
                }

                const result = await Interpreter.run(overloads, scope);
                parsedValue = parsedValue.replace()
                parsedFields.push(parsedValue);

                fieldIdx++;
            };

            const instructionResult = await task.data.run(task, scope, parsedFields ?? undefined);
            output = output.replace(task.toString, instructionResult === undefined ? '' : instructionResult);

            // Stop the execution of code if allowed.
            if (scope.mustStop) break;
        }

        // Return the result.
        return output;
    }
};

module.exports = {
    Interpreter,
    MAIN_FUNCTION,
};
