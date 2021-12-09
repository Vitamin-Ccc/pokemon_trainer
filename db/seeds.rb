# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Trainer.destroy_all

require "faker"

t1 = Trainer.create(name: "Sky", age: 18)
t2 = Trainer.create(name: Faker::Name.first_name, age: rand(16...30))
t3 = Trainer.create(name: Faker::Name.first_name, age: rand(16...30))
t4 = Trainer.create(name: Faker::Name.first_name, age: rand(16...30))

t1.pokemons.create([
  {name: "Piplup", gender: Faker::Gender.binary_type, fruit: Faker::Food.fruits},
  {name: "Lucario", gender: Faker::Gender.binary_type, fruit: Faker::Food.fruits},
  {name: "Cyndaquil", gender: Faker::Gender.binary_type, fruit: Faker::Food.fruits},
  {name: "Lugia", gender: Faker::Gender.binary_type, fruit: Faker::Food.fruits},
  {name: "Shaymin", gender: Faker::Gender.binary_type, fruit: Faker::Food.fruits},
])

4.times do
  t2.pokemons.create(
    name: Faker::Games::Pokemon.name,
    gender: Faker::Gender.binary_type,
    fruit: Faker::Food.fruits,
  )
end

2.times do
  t3.pokemons.create(
    name: Faker::Games::Pokemon.name,
    gender: Faker::Gender.binary_type,
    fruit: Faker::Food.fruits,
  )
end

3.times do
  t4.pokemons.create(
    name: Faker::Games::Pokemon.name,
    gender: Faker::Gender.binary_type,
    fruit: Faker::Food.fruits,
  )
end



