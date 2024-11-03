const crypto = require('crypto');

exports.generateArticleID = async () => {
    try {
        const length = 16;
        const randomBytes = crypto.randomBytes(Math.ceil(length / 2));
        const randomHex = randomBytes.toString('hex').slice(0, length);
        return `ART-${randomHex}`;
    } catch (error) {
        console.error('Article ID generation failed:', error);
        throw new Error('Failed to generate Article ID');
    }
};