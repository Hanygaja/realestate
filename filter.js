// Filter by price
const items = document.querySelectorAll('.all-items .items');


    const filteredPrices = event => {
        event.preventDefault();



        const searchMin = Number(document.getElementById('min').value); // Min price search tap
        const searchMax = Number(document.getElementById('max').value); // Max price search tap
        const rentSale = document.querySelector('.rent-sale').value; // Rent/Sale search tap
        const allCities = document.querySelector('.all-cities').value; // City search tap
        const minRooms = document.querySelector('.min-rooms').value; // Min rooms search tap
        const maxRooms = document.querySelector('.max-rooms').value; // Max rooms search tap

        items.forEach(item => {
        const price = Number(item.querySelector('.price').textContent);
        const status = item.querySelector('.status').textContent;
        const city = item.querySelector('.city').textContent;
        const rooms = Number(item.querySelector('.rooms').textContent);

        if (price < searchMin || price > searchMax || rentSale !== status || allCities !== city
        || rooms < minRooms || rooms > maxRooms) {
        item.style.display = 'none';
        document.querySelector('.error').style.display = "block";
        } else
        item.style.display = 'block';

    })
}