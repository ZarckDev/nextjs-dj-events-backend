"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // Get logged in Users
  async me(context) {
    const user = context.state.user;

    if (!user) {
      return context.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    // specific user events
    const data = await strapi.services.events.find({ user: user.id });

    if (!data) {
      return context.notFound();
    }

    return sanitizeEntity(data, { model: strapi.models.events });
  },
};
