# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Trip.destroy_all

user1 = User.create({
    name: "Mingjing",
    email: "mingjing@gmail.com",
    password: "1234567",
})

Trip1 = Trip.create({
    name: "Summer fun",
    category: "Advantures",
    region: "Pennsylvania",
    user_id: user1.id
})

trip2 = Trip.create({
    name: "Road trip",
    category: "Relax",
    region: "Florida",
    user_id: user1.id
})