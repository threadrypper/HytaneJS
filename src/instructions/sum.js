/** @import { Instruction } from '../../index' */

/**
 * @type {Instruction}
 */
const instruction = {
    name: 'sum',
    description: 'Addition of two numbers.',
    interpret: true,
    scoped: false,
    parameters: [
        {
            name: 'Lefthand',
            description: 'The lefthand side of the addition.',
            type: 'number',
            optional: false,
            spread: false
        },
        {
            name: 'Righthand',
            description: 'The righthand side of the addition.',
            type: 'number',
            optional: false,
            spread: false
        },
    ],
    output: 'number',
    run: (fn, scope, [left, right]) => {
        return (parseInt(left) + parseInt(right)).toString();
    }
};

module.exports = instruction;