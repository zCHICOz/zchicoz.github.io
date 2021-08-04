function reservedRoom(e, btnCancel) {
  const buttonsContainer = e.parentElement;
  const cardInfo = buttonsContainer.parentElement
  const card = cardInfo.parentElement;
  const buttonCancel = document.getElementById(btnCancel);

  buttonCancel.style.display = 'inline';

  e.innerHTML = 'Reservado!';
  card.classList.add('reserved');
};

function cancelReserve(e, btnReserve) {
  const buttonsContainer = e.parentElement;
  const cardInfo = buttonsContainer.parentElement;
  const card = cardInfo.parentElement;
  const buttonReserve = document.getElementById(btnReserve);

  const confirmation = confirm('Deseja mesmo cancelar essa reserva?');

  if(confirmation) {
    buttonReserve.innerHTML = 'Reservar';
    e.style.display = 'none';
    card.classList.remove('reserved');
    
    alert('Reserva cancelada com sucesso!');
  }
}