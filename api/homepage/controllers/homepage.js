const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    const entity = await strapi.services.homepage.find(['Content', 'Content.projects']);
    return sanitizeEntity(entity, { model: strapi.models.homepage });
  },
};