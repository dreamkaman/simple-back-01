const { Schema, model } = require('mongoose');

const segmentSchema = Schema(
  {
    age: {
      type: Number,
    },
    idRegion: {
      type: Schema.Types.ObjectId,
    },
    idUserStatus: {
      type: Schema.Types.ObjectId,
    },
    segmentName: {
      type: String,
      required: [true, 'Segment name is required'],
    },
  },
  { versionKey: false, timestamps: true },
);

const Segment = model('segment', segmentSchema);

module.exports = {
  Segment,
};
