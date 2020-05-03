// Listen for auth status changes
auth.onAuthStateChanged(user => {
    setupUI(user);
})

// get data from the cloud Database and display on the home page
db.collection('properties').onSnapshot(snapshot => {
    setupProp(snapshot.docs);
    
});
// get data from cloud database and display on the sub page
db.collection('properties').onSnapshot(snapshot => {
    setupSub(snapshot.docs);
})
 


// Create new POST and send it to firebase storage and clould forestore database
var clicker = 0; // init click check
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', async e => {
    e.preventDefault();
    ++clicker; // increase on every click
    if (clicker == 1) { // if it first time

    createForm.setAttribute('disabled', 'true'); // prevent another clicks.

    const ref = firebase.storage().ref();

    const images = createForm['upload-file'].files;
    const list = []


    for await(img of images){
        if (img !== 'length'){
        const name = new Date() + '-' + img.name
        const metadat = { contentType: img.type }
        const task = await ref.child(name).put(img, metadat)
            .then(snapshot => snapshot.ref.getDownloadURL());
            list.push(task)}
    }


    // adding to the Database
    await db.collection('properties').add({
        title: createForm['create-title'].value,
        city: createForm['add-city'].value,
        type: createForm['type-rent-sale'].value,
        rooms: createForm['add-rooms'].value,
        price: createForm['add-price'].value,
        image: list
    }).then(() => {
        //reset form
        createForm.reset();
        createForm.removeAttribute('disabled'); // make it clickable again
        clicker = 0;
    }).then( () => {
        //close modal
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
    }).catch(err => {
        console.log(err.message);
    })
    }
    else {return} // fallback
    })



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