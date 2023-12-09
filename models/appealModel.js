const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    idUser: {
      type: Schema.Types.ObjectId,
      required: [true, 'Id user is required'],
    },
    idService: {
      type: Schema.Types.ObjectId,
      required: [true, 'Id service is required'],
    },
    activityDate: {
      type: Date,
      required: [true, 'User activity date is required'],
    },
    idAppealStatus: {
      type: Schema.Types.ObjectId,
      required: [true, 'Id activity status is required'],
    },
  },
  { versionKey: false, timestamps: true },
);

const User = model('user', userSchema);

module.exports = {
  User,
};
