/** @import { Instruction } from '../../index' */

/**
 * @type {Instruction}
 */
const instruction = {
    name: 'let',
    description: 'Declares a runtime variable.',
    interpret: true,
    scoped: false,
    parameters: [
        {
            name: 'Name',
            description: 'The name of the variable.',
            type: 'string',
            optional: false,
            spread: false
        },
        {
            name: 'Value',
            description: 'The value of the variable.',
            type: 'string',
            optional: false,
            spread: false
        },
    ],
    output: 'unknown',
    run: (fn, scope, [name, value]) => {
        scope.variables.set(name, value);
    }
};

module.exports = instruction;