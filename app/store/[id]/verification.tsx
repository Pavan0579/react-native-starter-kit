import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useLocalSearchParams, router } from 'expo-router';
import { useThemeColor } from '@/hooks/use-theme-color';

export default function VerificationScreen() {
  const { id } = useLocalSearchParams();
  const backgroundColor = useThemeColor({}, 'background');

  useEffect(() => {
    // Navigate to activities screen after 5 seconds
    const timer = setTimeout(() => {
      router.replace(`/store/${id}/activities`);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleBack = () => {
    router.back();
  };

  const StatusBarComponent = () => (
    <View style={styles.statusBarContainer}>
      <Text style={styles.timeText}>9:41</Text>
      <View style={styles.statusBarRight}>
        <View style={styles.signalBars}>
          <View style={[styles.signalBar, styles.bar1]} />
          <View style={[styles.signalBar, styles.bar2]} />
          <View style={[styles.signalBar, styles.bar3]} />
          <View style={[styles.signalBar, styles.bar4]} />
        </View>
        <Svg width="20" height="12" viewBox="0 0 20 12" fill="none">
          <Path d="M10.0085 8.13354C10.7119 8.13354 11.3954 8.31839 11.9977 8.67085L12.2417 8.81366C12.4267 8.92193 12.4593 9.17532 12.3076 9.32658L10.2241 11.4043C10.0961 11.5319 9.88863 11.5319 9.76066 11.4043L7.69055 9.33993C7.53954 9.18934 7.57101 8.93724 7.75445 8.82817L7.99574 8.68471C8.60353 8.32332 9.29573 8.13354 10.0085 8.13354Z" fill="#333333"/>
          <Path d="M10.0084 4.31684C11.7583 4.31684 13.4385 4.89736 14.8072 5.97241L15.0007 6.12434C15.1549 6.24547 15.1684 6.47371 15.0296 6.61214L13.7858 7.85254C13.6707 7.96727 13.4887 7.98045 13.3582 7.88349L13.2066 7.7708C12.2822 7.08376 11.1675 6.71523 10.0084 6.71523C8.84225 6.71523 7.72104 7.08835 6.79354 7.78327L6.64176 7.89699C6.51129 7.99474 6.32859 7.98187 6.21319 7.8668L4.9698 6.62686C4.83128 6.48872 4.84443 6.26106 4.99794 6.1397L5.19027 5.98765C6.56225 4.90301 8.25006 4.31684 10.0084 4.31684Z" fill="#333333"/>
          <Path d="M10.0085 0.5C12.7856 0.5 15.4414 1.47963 17.5435 3.27524L17.723 3.42851C17.868 3.55237 17.8765 3.77314 17.7415 3.90777L16.5017 5.14415C16.3816 5.26393 16.1896 5.27232 16.0594 5.16348L15.9059 5.03512C14.2508 3.65119 12.1764 2.89839 10.0085 2.89839C7.83317 2.89839 5.75208 3.65638 4.09453 5.04896L3.94096 5.17798C3.81082 5.28731 3.61842 5.27913 3.4981 5.15914L2.25846 3.92294C2.12364 3.78849 2.13194 3.5681 2.27649 3.44411L2.45523 3.29079C4.55996 1.48548 7.22309 0.5 10.0085 0.5Z" fill="#333333"/>
        </Svg>
        <View style={styles.batteryContainer}>
          <View style={styles.batteryFrame}>
            <View style={styles.batteryFill} />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ffffff' }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <StatusBarComponent />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M7 18L1 12L7 6" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Store-{id}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.mapPlaceholder}>
          {/* Map/location animation placeholder */}
        </View>
        
        <View style={styles.messageContainer}>
          <Text style={styles.verificationMessage}>Verifying and checking in...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  statusBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 44,
  },
  timeText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333333',
    letterSpacing: -0.68,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 1,
    width: 20,
    height: 14,
  },
  signalBar: {
    backgroundColor: '#333333',
    borderRadius: 1,
    width: 3,
  },
  bar1: { height: 5 },
  bar2: { height: 7 },
  bar3: { height: 10 },
  bar4: { height: 12 },
  batteryContainer: {
    width: 28,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryFrame: {
    width: 25,
    height: 13,
    borderRadius: 3.5,
    borderWidth: 1,
    borderColor: '#333333',
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryFill: {
    width: 21,
    height: 9,
    backgroundColor: '#333333',
    borderRadius: 1.33,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.2,
    flex: 1,
    textAlign: 'center',
    marginRight: 32,
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  mapPlaceholder: {
    width: 534,
    height: 300,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginBottom: 100,
    alignSelf: 'center',
    maxWidth: Dimensions.get('window').width - 32,
  },
  messageContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  verificationMessage: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    letterSpacing: -0.17,
    textAlign: 'center',
    paddingHorizontal: 28,
  },
});
