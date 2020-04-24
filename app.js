const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const showingProp = document.querySelector('.showing-prop');

const setupUI = (user) => {
  if (user) {
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}


const setupProp = (data, url) => {
  let html = '';
  data.forEach((doc) => {
    const info = doc.data();
    let li = `
    <div class="col s12 l4 items">
      <div class="card" style="height: 407px;">
        <div class="card-image">
          <a href="property.html">
          <img src="${url}" style="height: 228px;"></a>
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
    html += li

    showingProp.innerHTML = html;
  })
}

