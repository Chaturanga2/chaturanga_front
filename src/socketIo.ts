import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // remplacer avec l'URL de votre serveur Socket.IO

export default socket;