const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        // based on event "name"
        data.slug = slugify(data.name, { lower: true }); // force lower case
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.name) {
        data.slug = slugify(data.name, { lower: true }); // force lower case
      }
    },
  },
};
