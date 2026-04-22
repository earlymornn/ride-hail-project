module.exports = (db) =>
  db.model(
    'Orders',
    new db.Schema(
      {
        user_id: { type: db.Schema.Types.ObjectId, ref: 'Users', required: true },
        driver_id: { type: db.Schema.Types.ObjectId, ref: 'Drivers' },
        pickup_location: {
          address: String,
          coordinates: [Number], // Mhs 6
        },
        dropoff_location: {
          address: String,
          coordinates: [Number], // Mhs 6
        },
        fare: { type: Number, required: true }, // Mhs 2 (Fare)
        voucher_code: String, // Mhs 2 (Voucher)
        status: {
          type: String,
          enum: ['Pending', 'In-Progress', 'Completed', 'Cancelled'],
          default: 'Pending', // Mhs 3 (Create Orders)
        },
        payment_status: { type: String, default: 'Unpaid' }, // Mhs 4 (Payment)
        rating: { // Mhs 4 (Ratings)
          stars: { type: Number, min: 1, max: 5 },
          comment: String,
        },
        emergency_status: { type: Boolean, default: false }, // Mhs 1 (Safety)
        created_at: { type: Date, default: Date.now },
      },
      { collection: 'orders' }
    )
  );