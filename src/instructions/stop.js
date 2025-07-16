/** @import { Instruction } from '../../index' */

/**
 * @type {Instruction}
 */
const instruction = {
    name: 'stop',
    description: 'Stops the execution of the code that is left.',
    interpret: false,
    scoped: false,
    output: 'unknown',
    run: (fn, scope) => {
        scope.makeStop();
    }
};

module.exports = instruction;