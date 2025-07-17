const { Client } = require('oceanic.js');

/**
 * The HytaneJS Discord client.
 */
class DiscordClient extends Client {
    /**
     * Creates a new discord client.
     * @param {import('../../..').HytaneClientOptions} options - Client setup options.
     */
    constructor(options) {
        super(options);
    };
};

module.exports = {
    DiscordClient,
};
