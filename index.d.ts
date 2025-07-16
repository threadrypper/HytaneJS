import { Client } from 'oceanic.js';
import { Task } from './src/classes/core/Lexer';
import { Scope } from './src';
/**
 * Represents the function closure states.
 * @interface ITaskClosures
 */
export interface ITaskClosures {
    /**
     * Whether the function was opened.
     */
    opened: boolean;
    /**
     * Whether the function was closed.
     */
    closed: boolean;
};

/**
 * The ID of a function.
 */
export type FunctionID = `[OVERLOAD_(${string})]`;

/**
 * The HytaneJS code compiler.
 */
export declare class Lexer {
    /**
     * The current task separator. (name from args)
     */
    static separator: string;
    /**
     * The allowed task separators.
     */
    static allowedSeparators: string[];
    /**
     * Set the task separator.
     */
    static setSeparator(separator: string): void;
    /**
     * Creates a new lexer.
     * @param {string} input - The string input to compile.
     * @param {boolean} addMainTask - Whether add the main task.
     * @param {string[]} [path=[]] - The current path of the lexer.
     */
    constructor(input?: string, addMainTask?: boolean, separator?: string, path?: string[]);
    /**
     * Set the input string to be compiled.
     * @param {string} input - The input string.
     * @param {boolean} addMainTask - Whether add the main task.
     * @param {string[]} [path=[]] - The path of the lexer.
     */
    setInput(input: string, addMainTask?: boolean, path?: string[]): Lexer;
    /**
     * Compiles the string input.
     */
    compile(): Task[];
};

/**
 * Represents a command.
 */
export interface HytaneCommand {
    /**
     * The command code.
     */
    code: string
    /**
     * The compiled tasks for this command.
     */
    __compiled__?: Task[]
};

/**
 * A base scope interface.
 */
export interface BaseScope {
    /**
     * The current command.
     */
    command:    HytaneCommand;
    /**
     * The variables contained in the scope.
     */
    variables:  Map<string, string>;
};

/**
 * The available argument types.
 */
export type ArgType = 'boolean' | 'number' | 'string' | 'unknown';

/**
 * The declaration of an instruction argument.
 */
export interface InstructionArgument {
    name:           string;
    description:    string;
    optional:       boolean;
    spread:         boolean;
    type:           ArgType;
    fallback?:      (scope: Scope) => string;
};

/**
 * A Hytane instruction definition.
 */
export interface Instruction {
    name:           string;
    description:    string;
    version?:       string;
    interpret:      boolean;
    scoped:         boolean;
    parameters?:    InstructionArgument[];
    example?:       string;
    output?:        ArgType;
    run:            (fn: Task, scope: Scope, args?: string[]) => Promise<string | undefined> | string | undefined;
};

/**
 * The HytaneJS Discord client.
 */
export declare class DiscordClient extends Client {};
