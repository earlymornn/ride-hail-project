module.exports = (db) =>
  db.model(
    'Drivers',
    new db.Schema(
      {
        driver_name: { type: String, required: true },
        vehicle_plate: { type: String, required: true },
        is_available: { type: Boolean, default: true },
        // Koordinat untuk pencarian radius terdekat (Mhs 1)
        current_location: {
          type: { type: String, default: 'Point' },
          coordinates: { type: [Number], index: '2dsphere' }, // [Long, Lat]
        },
        updated_at: { type: Date, default: Date.now },
      },
      { collection: 'drivers' }
    )
  );