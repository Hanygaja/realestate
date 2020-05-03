// Filter by price
// const items = document.querySelectorAll('.all-items .items');
// console.log(items)
const filteredPrices = (li) => {
    
    
    const searchMin = Number(document.getElementById('min').value); // Min price search tap
    const searchMax = Number(document.getElementById('max').value); // Max price search tap
    const rentSale = document.querySelector('.rent-sale').value; // Rent/Sale search tap
    const allCities = document.querySelector('.all-cities').value; // City search tap
    const minRooms = document.querySelector('.min-rooms').value; // Min rooms search tap
    const maxRooms = document.querySelector('.max-rooms').value; // Max rooms search tap
            // console.log(searchMin)
        const str = li;
        const temp = document.createElement('div');
        temp.innerHTML = str;
        // console.log(temp)
        const items = temp.querySelectorAll('.items');
        items.forEach(item => {
            const price = Number(item.querySelector('.price').textContent);
            const status = item.querySelector('.status').textContent;
            const city = item.querySelector('.city').textContent;
            const rooms = Number(item.querySelector('.rooms').textContent);
          
            // console.log(price)
            
            if (price < searchMin || price > searchMax || rentSale !== status || allCities !== city
                 || rooms < minRooms || rooms > maxRooms) {
                    item.style.display = 'none';
                
                } else
                item.style.display = 'block';
        
            })
}

const form = document.querySelector('.search-form');
form.addEventListener('submit', (event) =>  {
    event.preventDefault();
    filteredPrices(li)
})


// get data from cloud database and pass it to the filter.js in order to filter properties
    //     db.collection('properties').onSnapshot(snapshot => {
    //         snapshot.docs.forEach(doc => {
    //             let info = doc.data()
    //             filteredPrices(info)
    //         })
    //     })


    // const filteredPrices = (info) => {
        // event.preventDefault();
            // console.log(info)
            // Search tap
            // const searchMin = Number(document.getElementById('min').value); // Min price search tap
            // const searchMax = Number(document.getElementById('max').value); // Max price search tap
            // const rentSale = document.querySelector('.rent-sale').value; // Rent/Sale search tap
            // const allCities = document.querySelector('.all-cities').value; // City search tap
            // const minRooms = document.querySelector('.min-rooms').value; // Min rooms search tap
            // const maxRooms = document.querySelector('.max-rooms').value; // Max rooms search tap

            // if(info.price < searchMin || info.price > searchMax) {
            //     items.style.display = 'none';
            // } else 
            //     items.style.display = 'block';
    

        // looping on displayed items
                        // items.forEach(item => {
                        // const price = Number(item.querySelector('.price').textContent);
                        // const status = item.querySelector('.status').textContent;
                        // const city = item.querySelector('.city').textContent;
                        // const rooms = Number(item.querySelector('.rooms').textContent);
        

    //     if (price < searchMin || price > searchMax || rentSale !== status || allCities !== city
    //     || rooms < minRooms || rooms > maxRooms) {
    //     item.style.display = 'none';
    //     // document.querySelector('.error').style.display = "block";
    //     } else
    //     item.style.display = 'block';

    // }