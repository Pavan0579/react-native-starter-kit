import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useLocalSearchParams, router } from 'expo-router';
import { Button, Heading2, Body, spacing, colors } from '@/design-system/components';

export default function ImagingScreen() {
  const { id } = useLocalSearchParams();

  const handleBack = () => {
    router.back();
  };

  const handleStartImaging = () => {
    console.log('Start imaging for store:', id);
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
          <Path d="M10.0085 8.13354C10.7119 8.13354 11.3954 8.31839 11.9977 8.67086L12.2417 8.81367C12.4267 8.92194 12.4593 9.17532 12.3076 9.32658L10.2241 11.4043C10.0961 11.5319 9.88863 11.5319 9.76066 11.4043L7.69055 9.33994C7.53954 9.18934 7.57101 8.93724 7.75445 8.82818L7.99574 8.68471C8.60353 8.32333 9.29573 8.13354 10.0085 8.13354Z" fill="#333333"/>
          <Path d="M10.0084 4.31689C11.7583 4.31689 13.4385 4.89741 14.8072 5.97247L15.0007 6.1244C15.1549 6.24553 15.1684 6.47377 15.0296 6.6122L13.7858 7.8526C13.6707 7.96733 13.4887 7.98051 13.3582 7.88355L13.2066 7.77086C12.2822 7.08382 11.1675 6.71529 10.0084 6.71529C8.84225 6.71529 7.72104 7.0884 6.79354 7.78333L6.64176 7.89705C6.51129 7.9948 6.32859 7.98193 6.21319 7.86686L4.9698 6.62691C4.83128 6.48878 4.84443 6.26106 4.99794 6.13976L5.19027 5.9877C6.56225 4.90306 8.25006 4.31689 10.0084 4.31689Z" fill="#333333"/>
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

  const ImagePlaceholderIcon = () => (
    <Svg width="280" height="280" viewBox="0 0 390 427" fill="none">
      <Path d="M285.022 209.23C285.022 262.526 241.817 305.732 188.521 305.732C135.224 305.732 92.0185 262.526 92.0185 209.23C92.0185 155.934 135.224 112.728 188.521 112.728C241.817 112.728 285.022 155.934 285.022 209.23Z" fill="#FFCC2B"/>
      <Path d="M73.231 208.615C73.3352 144.942 125.037 93.4095 188.709 93.5136C252.381 93.6178 303.914 145.319 303.81 208.992C303.706 272.664 252.004 324.197 188.332 324.093C124.66 323.988 73.1268 272.287 73.231 208.615Z" stroke="#478FF7" strokeWidth="3" strokeMiterlimit="10" strokeDasharray="12 12"/>
      <Path d="M309.575 283.101H73.0171V132.797H309.575V283.101Z" fill="#478FF7"/>
      <Path d="M162.687 184.891C162.687 194.796 154.658 202.825 144.753 202.825C134.848 202.825 126.819 194.796 126.819 184.891C126.819 174.986 134.848 166.957 144.753 166.957C154.658 166.957 162.687 174.986 162.687 184.891Z" fill="white"/>
      <Path d="M102.207 283.101L157.563 230.153L179.682 249.53L231.861 198.555L301.846 283.101" fill="white"/>
      <Path d="M364.43 180.194H264.968V116.998H364.43V180.194Z" fill="#FFCC2B"/>
      <Path d="M302.671 138.902C302.671 143.066 299.294 146.442 295.13 146.442C290.966 146.442 287.589 143.066 287.589 138.902C287.589 134.738 290.966 131.361 295.13 131.361C299.294 131.361 302.671 134.738 302.671 138.902Z" fill="white"/>
      <Path d="M277.241 180.194L300.516 157.932L309.816 166.079L331.755 144.647L361.18 180.194" fill="#333333"/>
    </Svg>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.neutral.white} />
      <StatusBarComponent />

      <View style={styles.header}>
        <View style={styles.backButton}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M7 18L1 12L7 6" stroke={colors.neutral.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </View>
        <Heading2 color={colors.neutral.dark} style={styles.headerTitle}>Store-{id}</Heading2>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <ImagePlaceholderIcon />
        </View>

        <Body color={colors.neutral.dark} style={styles.instructionText}>
          Capture store images and add your inputs
        </Body>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Start Imaging" onPress={handleStartImaging} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral.white,
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
    fontFamily: 'SF Pro Text',
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
    paddingTop: 29,
    paddingBottom: 16,
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
    fontFamily: 'Poppins',
  },
  headerSpacer: {
    width: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  illustrationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  instructionText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    letterSpacing: -0.17,
    fontFamily: 'Poppins',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingHorizontal: 17,
    paddingBottom: 30,
  },
  startButton: {
    backgroundColor: '#2F80ED',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: -0.17,
    fontFamily: 'Roboto',
  },
});
