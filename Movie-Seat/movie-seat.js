const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);

populateUI()
// Save selected moive index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}
// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
// Find selected seats
    const seatsIndex = [...selectedSeats].map(function(seat) {
        return[...seats].indexOf(seat);
    });
// Set local storage
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


    const selectedSeatCount = selectedSeats.length;

    console.log(selectedSeats)
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
    
}

// Get data from localStorge and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat,index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    };
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}
// Seat click event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
       e.target.classList.toggle('selected'); 
       console.log(ticketPrice)
       updateSelectedCount();
    }
});
// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = parseInt(e.target.value);
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})
// Initial count and total set
updateSelectedCount();