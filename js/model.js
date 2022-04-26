class Visitor {
  constructor (id, firstName, lastName, address, city, state, zip, phone, email, discover, comments) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
    this.discover = discover;
    this.comments = comments;
  }
  // returns a concatenated string of the first and last name
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
  // returns a concatenated string of the full address
  get fullAddress() {
    return this.address + ' ' + this.city + ' ' + this.state + ' ' + this.zip;
  }
}

// array of visitors 

let visitors = [
  new Visitor(1, 'Jon', 'Bel', '1414 W 1818 N', 'Brooklyn', 'New York', '44213', '295-555-1234', 'jon@bel.com', {telegram:false, gossip:true, grader:false}, 'comments'),
  new Visitor(2, 'Jess', 'Day', 'Apt. D4', 'Brooklyn', 'New York', '44213', '214-555-6678', 'jd@ng.com', {telegram:true, gossip:false, grader:false}, 'notes')
];

// functions for the above class

function modelAddVisitor(visitor) {}

function modelDeleteVisitor(id) {
  // call findVisitorIndex(id) and get index of the visitor object 
  // delete the row with the matching id
  // delete the item with the matching index from the visitors array 
}

function findVisitor(id) {
  // loop through visitors and check id compared with the given id 
  // return the visitor object that matches
}

function findVisitorIndex(id) {
  // loop through visitors and check id compared with the given id 
  // return the index of the visitor object
}


// OPTIONAL BELOW //
function modelUpdateVisitor(visitor) {}
