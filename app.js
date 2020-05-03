const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const showingProp = document.querySelector('.showing-prop');
const propShow = document.querySelector('.all-properties');

const setupUI = (user) => {
  if (user) {
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}


// Displaying the properties to the HomePage
const setupProp = data => {
  let html = '';
  data.forEach(doc => {
    const info = doc.data();
    let li = `
    <div class="col s12 l4 items">
      <div class="card" style="height: 407px;">
        <div class="card-image">
          <a href="property.html?${doc.id}">
          <img src="${info.image[0]}" style="height: 228px;"></a>
          <a class="btn-floating halfway-fab waves-effect waves-light red center status">${info.type}</a>
        </div>
        <div class="card-content">
          <span><b class="house-title">${info.title}</b></span><br>
          <span><b class="blue-text price">${info.price}</b> &#36;</span><br>
          <span class="material-icons blue-text">room</span>
          <span><b class="city">${info.city}</b></span><br>
          <span class="material-icons blue-text">single_bed</span>
          <span><b class="rooms">${info.rooms}</b> rooms</span>
        </div>
      </div>
  </div>
    `;
    filteredPrices(li)
    html += li

    showingProp.innerHTML = html; 
  })
}


// Displaying the properties to the Properties Page(Subpage)
const setupSub = data => {

  const id = window.location.href.split('?')[1];
  data.forEach(doc => {
    if(doc.id === id) {
    let info = doc.data();
    const images = info.image.map(img => {
      return `
         <a href="#" class="carousel-item">
            <img src=${img} alt="istanbul"  style="height: 390px;">
         </a>
      `;
});
    let html = `
    <div class="row" >
            <div class="col l6 s12 m12">
                <div class="carousel carousel-slider" data-indicators ="true" style="border-radius: 5px;">
                ${images.join('')}
                </div>
                  <div class="btn indigo waves-affect prev">Prev</div>
                  <div class="btn indigo waves-affect right next">Next</div>
            </div>
            <div class="col l6 s12 m12">
                <div class="card" style="height: 357px; border-radius: 5px; background-color: #f9f9f9; padding: 10px;">
                      <h5 class="center">${info.title}</h5><br><br>
                      <span style="font-weight: bold;"><span class="blue-text">Price:</span> ${info.price} &#36;</span><br><br>
                      <span><i class="material-icons blue-text">room</i> Located in ${info.city}.</span><br><br>
                      <span><i class="material-icons blue-text">single_bed</i> Total Rooms ${info.rooms}.</span><br><br>
                      
                </div>
            </div>
    </div>
      `;
        // To activate the image slider (Materialize css)
        $(document).ready(function(){
          $('.carousel').carousel();
      
          // function for next slide
          $('.next').click(function(){
              $('.carousel').carousel('next');
          });
      
          // function for prev slide
          $('.prev').click(function(){
              $('.carousel').carousel('prev');
          });
  });
  

      propShow.innerHTML = html;
  }
  })
}

