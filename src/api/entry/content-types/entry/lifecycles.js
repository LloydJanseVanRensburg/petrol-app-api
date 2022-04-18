module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    data.kilos_per_liter = data.distance / data.liters;
  },

  beforeUpdate(event) {
    const { data } = event.params;
    data.kilos_per_liter = data.distance / data.liters;
  },
};
