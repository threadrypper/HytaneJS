/** @import { Instruction } from '../../index' */

/**
 * @type {Instruction}
 */
const instruction = {
    name: 'get',
    description: 'Gets a runtime variable.',
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
    ],
    output: 'string',
    run: (fn, scope, [name]) => {
        return scope.variables.get(name);
    }
};

module.exports = instruction;