'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.offer.search(ctx.query);
    } else {
      entities = await strapi.services.offer.find(ctx.query);
    }
    // Filtre les entités pour retourner celles dont la valeur "isPublished" est à true
    entities = entities.filter(e => e.isPublished === true)

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.offer }));
  },
};
