import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List"></Header>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});