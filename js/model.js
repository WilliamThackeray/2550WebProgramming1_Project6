class Visitor {
  constructor (id, firstName, lastName, address, city, state, zip, phone, email, discover, comments) {

  }
  // returns a string of the id of the visitor
  get id() {}
  // returns a concatenated string of the first and last name
  get fullName() {}
  // returns a concatenated string of the full address
  get fullAddress() {}
  // returns a string of the phone number
  get phone() {}
  // returns a string of the email
  get email() {}
  // returns a string of the comments 
  get comments() {}
}

// array of visitors 

let visitors = [];

// functions for the above class

function modelAddVisitor(visitor) {}

function modelDeleteVisitor(id) {}

function findVisitor(id) {}

function findVisitorIndex(id) {}


// OPTIONAL BELOW //
function modelUpdateVisitor(visitor) {}
