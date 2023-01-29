const VehicleSchema = {
    year: Number,
    model: String,
    fuel: {
        isDiesel: { type: Boolean, default: false },
        isPetrol: { type: Boolean, default: true },
        isElectric: { type: Boolean, default: false }
    },
    firstRegistrationDate: Date,
    sideImages: [{ data: Buffer, contentType: String }]
};

export default VehicleSchema;