const { Schema, model } = require('mongoose');

const segmentSchema = Schema(
  {
    segmentName: {
      type: String,
      required: [true, 'Segment name is required'],
    },
    segmentFilter: {
      type: String,
      required: [true, 'Segment filter is required'],
    },
  },
  { versionKey: false, timestamps: true },
);

const Segment = model('segment', segmentSchema);

module.exports = {
  Segment,
};
