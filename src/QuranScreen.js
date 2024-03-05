import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, IconButton, useTheme } from 'react-native-paper';
import alQuranData from '../assets/alQuran/al_quran.json';
import quranTransliteration from '../assets/alQuran/quran_transliteration.json';
import quranTranslation from '../assets/alQuran/quran.json';

const QuranScreen = ({ navigation }) => {
  const [activeDataSet, setActiveDataSet] = useState('alQuranData');
  const theme = useTheme();

  const dataSets = {
    alQuranData,
    quranTransliteration,
    quranTranslation,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card: {
      margin: 8,
      elevation: 2,
      backgroundColor: theme.colors.surface,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={styles.buttonContainer}>
        <IconButton
          icon="book-open-variant"
          size={30}
          onPress={() => setActiveDataSet('alQuranData')}
          color={activeDataSet === 'alQuranData' ? theme.colors.accent : theme.colors.primary}
          style={{ backgroundColor: theme.colors.surface }}
        />
        <IconButton
          icon="alphabet-latin"
          size={30}
          onPress={() => setActiveDataSet('quranTransliteration')}
          color={activeDataSet === 'quranTransliteration' ? theme.colors.accent : theme.colors.primary}
          style={{ backgroundColor: theme.colors.surface }}
        />
        <IconButton
          icon="translate"
          size={30}
          onPress={() => setActiveDataSet('quranTranslation')}
          color={activeDataSet === 'quranTranslation' ? theme.colors.accent : theme.colors.primary}
          style={{ backgroundColor: theme.colors.surface }}
        />
      </View>
      <ScrollView style={styles.container}>
        {dataSets[activeDataSet].map((sura, index) => (
          <Card key={index} style={styles.card} onPress={() => navigation.navigate('VerseDetails', { verses: sura.verses })}>
            <Card.Title
              title={`${sura.name} - ${sura.transliteration}`}
              subtitle={sura.translation}
              left={(props) => <Text {...props} style={{ fontSize: 24 }}>📖</Text>}
              titleStyle={{ color: theme.colors.onSurface }}
              subtitleStyle={{ color: theme.colors.secondary }}
            />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuranScreen;
