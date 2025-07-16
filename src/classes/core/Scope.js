/** @import { BaseScope, HytaneCommand } from '../../../index' */

/**
 * The current runtime scope.
 */
class Scope {
    /**
     * The current command.
     * @type {HytaneCommand}
     */
    #command = null;

    /**
     * The parent scope, if any.
     * @type {?Scope}
     */
    #parent = null;

    /**
     * The variables for this scope.
     * @type {Map<string, string>}
     */
    #variables = new Map();

    /**
     * Creates a new scope.
     * @param {?Partial<BaseScope>} data - The data to create.
     */
    constructor(data = null) {
        if (data !== null) {
            if (data.variables) this.#variables = new Map(data.variables.entries());
            if (data.command) this.#command = data.command;
        }
    }

    /**
     * Set the current command.
     * @param {HytaneCommand} command - The command to interpret.
     * @returns {Scope}
     */
    setCommand(command) {
        this.#command = command;
        return this;
    };

    /**
     * Set the parent scope.
     * @param {Scope} scope - The scope to set as parent.
     * @returns {Scope}
     */
    setParent(scope) {
        this.#parent = scope;
        return this;
    };

    /**
     * Extends this scope.
     * @param {?Partial<BaseScope>} parent - The parent scope to inherit.
     * @returns {Scope}
     */
    extend(parent = null) {
        const child = new Scope(parent);
        child.setParent(this);

        return child;
    };

    get command() {
        return this.#command;
    }

    get variables() {
        return this.#variables;
    }
};

module.exports = {
    Scope,
};
