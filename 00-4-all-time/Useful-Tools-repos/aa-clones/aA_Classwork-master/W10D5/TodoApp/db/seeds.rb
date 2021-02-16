# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

todo1 = Todo.create(title: 'study', body: 'perfect react', done: 'true')
todo2 = Todo.create(title: 'sleep', body: 'get some rest', done: 'false')
todo3 = Todo.create(title: 'have good dreams', body: 'sleep well', done: 'false')
