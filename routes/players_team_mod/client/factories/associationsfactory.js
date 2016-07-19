 app.factory('AssociationsFactory', function() {
    var factory = {}; 
    var assignments = [
      { player: 'Bob', team: 'Chaos' },
      { player: 'Xena', team: 'Beauty' },
      { player: 'Loki', team: 'AncientOnes' },
    ]
    factory.getAssignments = function() {
      return assignments;
    }

    factory.addAssignment = function (player, team) {
      var temp = {
        player: player,
        team: team
      }
      assignments.push(temp);
    }

    factory.removeAssignment = function (idx) {
      assignments.splice(idx,1);
    }

    return factory;
  })