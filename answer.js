// create 5 burgers (at least 3 should be beef)
db.burgers.insertMany ({..})

// find all the burgers
db.burgers.find ({})

// show just the meat of each burger
db.burgers.find ({}, {meat})

// show just the toppings of each burger
db.burgers.find ({}, {toppings})

// show everything but the cheese
db.burgers.find ({}, {meat, toppings})

// find all the burgers with beef
db.burgers.find ({ meat: 'beef'})

// find all the burgers that are not beef
db.burgers.find ({meat: { $nin: 'beef'}})

// find the first burger with cheese
db.burgers.find({}).sort({"cheese": -1})

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burgers.update({_id: ObjectId("")}, {$set: {cheese: 'double cheese'}})

// find the burger you updated to have double cheese
db.burgers.find({"_id" :});

// find and update all the beef burgers to be 'veggie'
db.employees.updateMany({}, 
    { $set: {"meat.$[element]":"veggie"}},
    { arrayFilters: [{ element: "beef" }]})
// delete one of your veggie burgers
// BEWARE: db.burger.remove({meat: 'veggie'}) DELETES ALL!!!  DO NOT USE!
db.orders.deleteOne({ "veggie" })

// drop the collection
//Expected Output
//true
db.burgers.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


// Change the name of the key cheese to 'pumpkinSpice'


// find all the burgers with ketchup (or another topping you used at least once)


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 