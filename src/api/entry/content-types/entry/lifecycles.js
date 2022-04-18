module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    console.log(data);
    console.log(data.tripDistance / data.liters);
    data.kilos_per_liter = data.tripDistance / data.liters;
  },

  beforeUpdate(event) {
    const { data } = event.params;

    data.kilos_per_liter = data.tripDistance / data.liters;
  },
};
