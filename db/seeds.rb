# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

LogEntry.create(
  datetime: 2.days.ago,
  content: 'good',
  category: 'feeling',
)

LogEntry.create(
  datetime: 1.day.ago,
  content: %Q(
    15 min amrap

    15x power snatch, 75#
    30x double-under
    15x wall-ball, 20#
    30x double-under

    Score: 3 + 64
  ),
  category: 'exercise',
)

LogEntry.create(
  datetime: 5.minutes.ago,
  content: 'so-so',
  category: 'feeling',
)
