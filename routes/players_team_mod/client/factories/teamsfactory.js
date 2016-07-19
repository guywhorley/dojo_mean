 app.factory('TeamsFactory', function() {
    var factory = {}; 
    var teams = ['Chaos', 'Beauty', 'Druidic-UK', 'AncientOnes'];
    
    factory.getTeams = function() {
      return teams;
    }

    factory.addTeam = function (team) {
      teams.push(team);
    }

    factory.removeTeam = function (idx) {
      teams.splice(idx,1);
    }

    return factory;
  })