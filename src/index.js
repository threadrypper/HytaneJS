const { InstructionManager } = require('./classes/managers/InstructionManager');
const { DiscordClient } = require('./classes/structures/DiscordClient');
const { Interpreter } = require('./classes/core/Interpreter');
const { Lexer } = require('./classes/core/Lexer');
const { Scope } = require('./classes/core/Scope');

module.exports = {
    DiscordClient,
    Interpreter,
    InstructionManager,
    Lexer,
    Scope,
};
