# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Trip.destroy_all
Place.destroy_all
Allplace.destroy_all

user1 = User.create({
    name: "Mingjing",
    email: "mingjing@gmail.com",
    password: "1234567",
})

trip1 = Trip.create({
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

place1 = Place.create({
    name: "pocono",
    region: "Pennsylvania",
    image: "https://i.imgur.com/54sIqnZ.jpg",
})

place2 = Place.create({
    name: "orlando",
    region: "Florida",
    image: "https://i.imgur.com/uU405eP.jpg",
})

# place3 = Place.create({
#     name: "miami",
#     region: "Florida",
#     image: "https://i.imgur.com/p58SMMT.jpg",
# })

# place4 = Place.create({
#     name: "wilmington",
#     region: "Pennsylvania",
#     image: "https://i.imgur.com/w4TMP39.jpg",
# })

# place5 = Place.create({
#     name: "Homestead",
#     region: "Florida",
#     image: "https://i.imgur.com/wHe9Z9E.jpg",
# })

# place6 = Place.create({
#     name: "Hummelstown",
#     region: "Pennsylvania",
#     image: "https://i.imgur.com/YElcx6V.jpg",
# })


trip1.places << Place.find_by(name: "pocono")
# trip1.places << Place.find_by(name: "wilmington")
# trip1.places << Place.find_by(name: "Hummelstown")
trip2.places << Place.find_by(name: "orlando")
# trip2.places << Place.find_by(name: "miami")
# trip2.places << Place.find_by(name: "Homestead")


allplace1 = Allplace.create({
    name: "pocono",
    region: "Pennsylvania",
    image: "https://i.imgur.com/54sIqnZ.jpg",
})

allplace2 = Allplace.create({
    name: "orlando",
    region: "Florida",
    image: "https://i.imgur.com/uU405eP.jpg",
})

allplace3 = Allplace.create({
    name: "miami",
    region: "Florida",
    image: "https://i.imgur.com/p58SMMT.jpg",
})

allplace4 = Allplace.create({
    name: "wilmington",
    region: "Pennsylvania",
    image: "https://i.imgur.com/w4TMP39.jpg",
})

allplace5 = Allplace.create({
    name: "Homestead",
    region: "Florida",
    image: "https://i.imgur.com/wHe9Z9E.jpg",
})

allplace6 = Allplace.create({
    name: "Hummelstown",
    region: "Pennsylvania",
    image: "https://i.imgur.com/YElcx6V.jpg",
})