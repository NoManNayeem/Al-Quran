import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Paragraph, useTheme } from 'react-native-paper';

const VerseDetails = ({ route }) => {
  const { verses } = route.params;
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
      backgroundColor: theme.colors.background,
    },
    verseContainer: {
      marginBottom: 20,
      padding: 10,
      borderRadius: 8,
      backgroundColor: theme.colors.surface,
    },
    verseText: {
      fontSize: 18,
      marginBottom: 5,
      textAlign: 'center',
      color: theme.colors.primary,
    },
    transliteration: {
      fontSize: 16,
      marginBottom: 5,
      textAlign: 'center',
      color: theme.colors.onSurface,
    },
    translation: {
      fontSize: 16,
      textAlign: 'center',
      color: theme.colors.secondary,
    },
  });

  return (
    <ScrollView style={styles.container}>
      {verses.map((verse, index) => (
        <View key={index} style={styles.verseContainer}>
          <Paragraph style={styles.verseText}>{verse.text}</Paragraph>
          {verse.transliteration && <Paragraph style={styles.transliteration}>{verse.transliteration}</Paragraph>}
          {verse.translation && <Paragraph style={styles.translation}>{verse.translation}</Paragraph>}
        </View>
      ))}
    </ScrollView>
  );
};

export default VerseDetails;
