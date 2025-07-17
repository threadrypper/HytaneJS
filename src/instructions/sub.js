/** @import { Instruction } from '../../index' */

/**
 * @type {Instruction}
 */
const instruction = {
    name: 'sub',
    description: 'Makes the substraction of various numbers.',
    interpret: true,
    scoped: false,
    parameters: [
        {
            name: 'Numbers',
            description: 'The numbers to substract.',
            type: 'number',
            optional: false,
            spread: true
        },
    ],
    output: 'number',
    run: (fn, scope, [...numbers]) => {
        return numbers.map((num) => parseInt(num))
        .reduce((previous, current) => previous - current)
        .toString();
    }
};

module.exports = instruction;