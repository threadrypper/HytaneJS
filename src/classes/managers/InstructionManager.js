/** @import { Instruction } from '../../../index' */

/**
 * The global registry of functions.
 * @type {Record<string, Instruction>}
 */
let functions = {};

/**
 * The global instruction manager.
 */
class InstructionManager {
    /**
     * Deletes the given function from the global registry.
     * @param  {...string} names - The instruction names to remove.
     * @returns {void}
     */
    static delete(...names) {
        for (const name of names) {
            delete functions[name.toLowerCase()];
        }
    }
    /**
     * 
     * @param {string} name 
     * @returns {Instruction | null}
     */
    static fetch(name) {
        return functions[name.toLowerCase()] ?? null;
    }

    /**
     * Register instructions to the global registry.
     * @param {...Instruction} instructions - The instructions to add.
     * @returns {void}
     */
    static register(...instructions) {
        for (const instruction of instructions) {
            functions[instruction.name.toLowerCase()] = instruction;
        }
    }

    /**
     * Returns the size of the registered instructions.
     */
    static get size() {
        return Object.keys(functions).length;
    }
};

module.exports = {
    InstructionManager,
};
