/** @import { Instruction } from '../../index' */

/**
 * @type {Instruction}
 */
const instruction = {
    name: 'log',
    description: 'Logs a message.',
    interpret: true,
    scoped: false,
    parameters: [
        {
            name: 'Text',
            description: 'The text to log.',
            type: 'string',
            optional: false,
            spread: false
        }
    ],
    output: 'unknown',
    run: (fn, scope, [text]) => {
        console.log(text);
    },
};

module.exports = instruction;