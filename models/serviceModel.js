const { Schema, model } = require('mongoose');

const serviceSchema = Schema(
  {
    serviceName: {
      type: String,
      required: [true, 'Service name is required'],
    },
  },
  { versionKey: false, timestamps: true },
);

const Service = model('service', serviceSchema);

module.exports = {
  Service,
};
