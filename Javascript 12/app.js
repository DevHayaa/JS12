// 1:Create a signup form and display form data in your web
// page on submission.

document.getElementById('signupButton').addEventListener('click', function() {

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
});



// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function expand(){
//     var para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet obcaecati consequatur aut ducimus voluptas debitis praesentium doloremque quas dolores rerum eius cumque, quia provident aspernatur, placeat libero impedit molestiae."
//     document.getElementById("para").innerHTML = para
// }