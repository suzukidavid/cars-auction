const VehicleInfoSchema = {
    year: Number,
    make: String,
    model: String,
    trim: String,
    fuel: {
        isDiesel: { type: Boolean, default: false },
        isPetrol: { type: Boolean, default: true },
        isElectric: { type: Boolean, default: false }
    },
    location: String,
    miles: Number,
    firstRegistrationDate: Date
};

export default VehicleInfoSchema;