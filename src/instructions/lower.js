/** @import { Instruction } from '../../index' */

/**
 * @type {Instruction}
 */
const instruction = {
    name: 'lower',
    description: 'Converts a text to lowercase.',
    interpret: true,
    scoped: false,
    parameters: [
        {
            name: 'Text',
            description: 'The text to convert.',
            type: 'string',
            optional: false,
            spread: false
        },
    ],
    output: 'string',
    run: (fn, scope, [text]) => {
        return text.toLowerCase();
    }
};

module.exports = instruction;