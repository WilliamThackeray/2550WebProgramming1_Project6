function renderTable (containerID, visitors) {
  // renders a table using the visitors object array 
  
  // set up columns 
  $('#visitor-list').append('<tr id="table-row1">');
  $('#visitor-list').append('</tr>');

  $('#table-row1').append('<td>Name</td>');
  $('#table-row1').append('<td>Address</td>');
  $('#table-row1').append('<td>Phone</td>');
  $('#table-row1').append('<td>Email</td>');
  $('#table-row1').append('<td>ID</td>');
  $('#table-row1').append('<td>Actions</td>');

  // loop through visitors array and append rows
  $(visitors).each(function() {
    let id = this.id;
    $('#visitor-list').append(`<tr id="${id}">`)
    $('#visitor-list').append('</tr>')


    $(`#${id}`).append(`<td>${this.fullName}</td>`)
    $(`#${id}`).append(`<td>${this.fullAddress}</td>`)
    $(`#${id}`).append(`<td>${this.phone}</td>`)
    $(`#${id}`).append(`<td>${this.email}</td>`)
    $(`#${id}`).append(`<td>${id}</td>`)
    $(`#${id}`).append(`<td><a href="#">Edit</a> <a href="#" onclick="DeleteVisitor("${this.id}")">Delete</a></td>`)
  })
}

function showVisitors() {
  // shows visitor container and hides all other containers 
}

function showList() {
  // shows visitor list and hides form 
  $("visitor-form").hide();
  $("visitor-list").show();

}

function showForm() {
  // shows visitor form and hides list 
  $("visitor-form").show();
  $("visitor-list").hide();
}

function clearForm() {
  // clears values in the form input boxes
}