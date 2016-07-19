 // factories 
  app.factory('PlayersFactory', function() {
    var factory = {}; 
    var players = ['Bob', 'Mike', 'Jonas', 'Kendra', 'Sam', 'Xena', 'Hercules', 'Loki'];
    
    factory.getPlayers = function() {
      return players;
    }

    factory.addPlayer = function (player) {
      players.push(player);
    }

    factory.removePlayer = function (idx) {
      players.splice(idx,1);
    }

    return factory;
  })