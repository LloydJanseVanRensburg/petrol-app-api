module.exports = {
  beforeCreate(event) {
    const { data } = event.params;

    data.kilos_per_liter = data.tripDistance / data.liters;
  },

  beforeUpdate(event) {
    const { data } = event.params;

    data.kilos_per_liter = data.tripDistance / data.liters;
  },
};
