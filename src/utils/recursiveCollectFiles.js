const { readdirSync } = require('node:fs');
const { join } = require('node:path');

/**
 * Recursively collect all file paths inside a directory.
 * @param {string} path - The path to collect.
 * @param {(file: string) => boolean} cb - The callback condition to collect the files.
 * @returns {string[]}
 */
const recursiveCollectFiles = (path, cb = (file) => file.endsWith('.js')) => {
    /** @type {string[]} */
    const collected = [];
    const files = readdirSync(path, { withFileTypes: true });

    for (const file of files) {
        if (file.isDirectory()) {
            collected.push(...recursiveCollectFiles(join(path, file.name), cb));
        } else {
            if (cb && cb(file.name)) {
                collected.push(join(path, file.name));
            }
        }
    }

    return collected;
};

module.exports = {
    recursiveCollectFiles,
};