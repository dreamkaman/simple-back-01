const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    chatId: {
      type: Number,
      required: [true, 'ChartId is required'],
    },
    firstName: {
      type: String,
      required: [true, 'FirstName is required'],
    },
    lastName: {
      type: String,
      required: [true, 'LastName is required'],
    },
    sureName: {
      type: String,
      required: [true, 'SureName is required'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    idRegion: {
      type: Schema.Types.ObjectId,
      required: [true, 'Region is required'],
    },
    idUserStatus: {
      type: Schema.Types.ObjectId,
      required: [true, 'User status is required'],
    },
    lastActivityDate: {
      type: Date,
      required: [true, 'User last activity date is required'],
    },
  },
  { versionKey: false, timestamps: true },
);

const User = model('user', userSchema);

module.exports = {
  User,
};
