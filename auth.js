// Listen for auth status changes
auth.onAuthStateChanged(user => {
    setupUI(user);
})

// get data from the cloud Database
db.collection('properties').onSnapshot(snapshot => {
    setupProp(snapshot.docs);
    
});


// Create new POST and send it to firebase clould database and storage
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const ref = firebase.storage().ref()
    const file = createForm['upload-file'].files[0]
    const name = new Date() + '-' + file.name
    
    const task = ref.child(name).put(file)
    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
        setupProp(url);
    })

    // adding to the Database
    db.collection('properties').add({
        title: createForm['create-title'].value,
        city: createForm['add-city'].value,
        type: createForm['type-rent-sale'].value,
        rooms: createForm['add-rooms'].value,
        price: createForm['add-price'].value
    }).then(() => {
        // close the modal and reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        console.log(err.message);
    })
});


// Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', e => {
    e.preventDefault();

    // Get user info from the modal Sign Up form
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user to Firebase AUTH
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// Logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut();
});


// Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});






/* Nav Section (Responsive Icon) */
$(document).ready(function(){
    $('.sidenav').sidenav();
})

/* Setup materialize Modal components */
document.addEventListener('DOMContentLoaded', function() {
  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);
});

/* Banner Section*/
$(document).ready(function(){
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

    // setInterval(function(){
    //     $('.carousel').carousel('next');
    // }, 3000);
});
/* Search Section */
$(document).ready(function(){
    $('select').formSelect();
  });