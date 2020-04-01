const techniques = require("./data");

export default {
  getTechniques: function() {
    return new Promise((resolve, reject) => {
      resolve(techniques);
    });
  }
};
