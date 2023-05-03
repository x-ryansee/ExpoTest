import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const BaseballScoreboard = () => {
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('Team 1');

  const handleScoreUpdate = (increment) => {
    if (selectedTeam === 'Team 1') {
      setTeam1Score(team1Score + increment);
    } else {
      setTeam2Score(team2Score + increment);
    }
  };

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Baseball Scoreboard</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedPlayer}
          onValueChange={handlePlayerSelect}
        >
          <Picker.Item label="Select Player" value={null} />
          <Picker.Item label="Player 1" value="player1" />
          <Picker.Item label="Player 2" value="player2" />
          <Picker.Item label="Player 3" value="player3" />
        </Picker>
      </View>
      <View style={styles.teams}>
        <TouchableOpacity
          style={[styles.teamButton, selectedTeam === 'Team 1' && styles.activeTeamButton]}
          onPress={() => handleTeamSelect('Team 1')}
        >
          <Text style={styles.teamButtonText}>Team 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.teamButton, selectedTeam === 'Team 2' && styles.activeTeamButton]}
          onPress={() => handleTeamSelect('Team 2')}
        >
          <Text style={styles.teamButtonText}>Team 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scores}>
        <Text style={styles.score}>{team1Score}</Text>
        <Text style={styles.score}>-</Text>
        <Text style={styles.score}>{team2Score}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleScoreUpdate(1)}
        >
          <Text style={styles.buttonText}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleScoreUpdate(-1)}
        >
          <Text style={styles.buttonText}>-1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f2f2f2',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginRight: 10,
    },
    picker: {
      width: 150,
    },
    teams: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    teamButton: {
      backgroundColor: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 10,
    },
    activeTeamButton: {
      backgroundColor: '#4286f4',
      borderColor: '#4286f4',
    },
    teamButtonText: {
      color: '#333',
      fontWeight: 'bold',
    },
    scores: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    score: {
      fontSize: 48,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    buttons: {
      flexDirection: 'row',
    },
    button: {
      backgroundColor: '#4286f4',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginRight: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  

  export default BaseballScoreboard
  