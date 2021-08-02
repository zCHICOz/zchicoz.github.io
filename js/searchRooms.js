function searchRooms() {
  const roomsContainer = document.getElementById('list-rooms');
  roomsContainer.classList.remove('close-list-room');
  roomsContainer.classList.add('show-list-rooms');
};

document.getElementById('btn-search-rooms').addEventListener('click', e => {
  e.preventDefault();
  searchRooms();
})