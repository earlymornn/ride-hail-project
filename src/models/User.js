module.exports = (db) =>
  db.model(
    'Users',
    new db.Schema(
      {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }, // Untuk Login (Mhs 3)
        phone: { type: String, required: true },
        role: { type: String, default: 'passenger' },
        created_at: { type: Date, default: Date.now },
      },
      { collection: 'users' }
    )
  );