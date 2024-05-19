const prompt = require("prompt-sync")();

const hotels = [
  { id: 1, name: "Hotel Unique", city: "São Paulo", totalRooms: 92, availableRooms: 92, reviews: [] },
  { id: 2, name: "Hotel Atlântico Business", city: "Rio de Janeiro", totalRooms: 108, availableRooms: 108, reviews: [] },
  { id: 3, name: "Hotel Golden Park", city: "Salvador", totalRooms: 96, availableRooms: 96, reviews: [] },
];

const reservations = [];
let reservationCounter = 1;

const mainMenu = () => {
  console.log(`
[1] - Adicionar hotel
[2] - Buscar hotéis por cidade
[3] - Fazer reserva
[4] - Cancelar reserva
[5] - Listar reservas
[6] - Check-in
[7] - Check-out
[8] - Avaliar hotel
[9] - Gerar relatório de ocupação
[10] - Sair
  `);
}

const addHotel = () => {
  const name = prompt("Nome do hotel: ");
  const city = prompt("Cidade do hotel: ");
  const totalRooms = parseInt(prompt("Total de quartos: "));
  const newHotel = {
    id: hotels.length + 1,
    name,
    city,
    totalRooms,
    availableRooms: totalRooms,
    reviews: []
  };
  hotels.push(newHotel);
  console.log(`\nHotel ${name} adicionado com sucesso!`);
}

const searchHotelsByCity = () => {
  const city = prompt("Digite a cidade: ");
  const foundHotels = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());
  if (foundHotels.length > 0) {
    foundHotels.forEach(hotel => console.log(`\n${hotel.id} - ${hotel.name}\nQuartos disponíveis: ${hotel.availableRooms}/${hotel.totalRooms}`));
  } 
  else console.log("\nNenhum hotel encontrado nesta cidade.");
}

const makeReservation = () => {
  const hotelId = parseInt(prompt("ID do hotel: "));
  const hotel = hotels.find(hotel => hotel.id === hotelId);
  
  if (!hotel) console.log("\nHotel não encontrado.");
  else if (hotel.availableRooms === 0) console.log("\nHotel sem quartos disponíveis.");
  else {
    const name = prompt("Nome do cliente: ");
    const newReservation = { id: reservationCounter++, idHotel: hotelId, nameCliente: name };
    reservations.push(newReservation);
    hotel.availableRooms -= 1;
    console.log(`\nReserva feita com sucesso para ${name} no ${hotel.name}.`);
    console.log(`ID da reserva: ${newReservation.id}`)
  } 
}

const cancelReservation = () => {
  const reservationId = parseInt(prompt("ID da reserva: "));
  const reservationIndex = reservations.findIndex(res => res.id === reservationId);

  if (reservationIndex !== -1) {
    const reservation = reservations[reservationIndex];
    const hotel = hotels.find(hotel => hotel.id === reservation.idHotel);
    hotel.availableRooms += 1;
    reservations.splice(reservationIndex, 1);
    console.log(`\nReserva ${reservationId} cancelada com sucesso.`);
  } 
  else console.log("\nReserva não encontrada.");
}

const listReservations = () => {
  if (reservations.length) {
    reservations.forEach(reservation => {
      const hotel = hotels.find(hotel => hotel.id === reservation.idHotel);
      console.log(`\nReserva ${reservation.id}: ${reservation.nameCliente} no hotel ${hotel.name} (${hotel.city})`);
    });
  }
  else console.log("\nNão há registros de reservas.")
}

const checkIn = () => {
  const reservationId = parseInt(prompt("ID da reserva: "));
  const reservation = reservations.find(res => res.id === reservationId);
  if (reservation) {
    console.log(`\nCheck-in realizado para ${reservation.nameCliente} no hotel ${hotels.find(hotel => hotel.id === reservation.idHotel).name}.`);
  } 
  else console.log("\nReserva não encontrada.");
}

const checkOut = () => {
  const reservationId = parseInt(prompt("ID da reserva: "));
  const reservationIndex = reservations.findIndex(res => res.id === reservationId);
  if (reservationIndex !== -1) {
    const reservation = reservations[reservationIndex];
    const hotel = hotels.find(hotel => hotel.id === reservation.idHotel);
    hotel.availableRooms += 1;
    reservations.splice(reservationIndex, 1);
    console.log(`\nCheck-out realizado para ${reservation.nameCliente}. Reserva ${reservationId} finalizada.`);
  } 
  else console.log("\nReserva não encontrada.");
}

const reviewHotel = () => {
  const hotelId = parseInt(prompt("ID do hotel: "));
  const hotel = hotels.find(hotel => hotel.id === hotelId);
  if (hotel) {
    const rating = parseInt(prompt("Avaliação (1-5): "));
    const comment = prompt("Comentário: ");
    hotel.reviews.push({ rating, comment });
    console.log("\nAvaliação adicionada com sucesso.");
  } 
  else console.log("\nHotel não encontrado.");
}

const generateOccupationReport = () => {
  console.log();
  hotels.forEach(hotel => {
    const occupiedRooms = hotel.totalRooms - hotel.availableRooms;
    console.log(`${hotel.name} - Ocupação: ${occupiedRooms}/${hotel.totalRooms}`);
  });
}

while (true) {
  mainMenu();
  const option = parseInt(prompt("Selecione uma opção: "));

  switch (option) {
    case 1:
      addHotel();
      break;
    case 2:
      searchHotelsByCity();
      break;
    case 3:
      makeReservation();
      break;
    case 4:
      cancelReservation();
      break;
    case 5:
      listReservations();
      break;
    case 6:
      checkIn();
      break;
    case 7:
      checkOut();
      break;
    case 8:
      reviewHotel();
      break;
    case 9:
      generateOccupationReport();
      break;
    case 10:
      console.log("Encerrando o sistema...");
      process.exit();
    default:
      console.log("Opção inválida! Por favor, tente novamente.");
  }
}
