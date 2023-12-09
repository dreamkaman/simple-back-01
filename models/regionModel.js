const { Schema, model } = require('mongoose');

const regionSchema = Schema(
  {
    regionName: {
      type: String,
      required: [true, 'Region name is required'],
    },
    shortName: {
      type: String,
      required: [true, 'Short name is required'],
    },
  },
  { versionKey: false, timestamps: true },
);

const Region = model('region', regionSchema);

module.exports = {
  Region,
};
