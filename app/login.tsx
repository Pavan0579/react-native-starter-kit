import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { Button, TextInput, LabelLarge, DisplayTitle, spacing, colors } from '@/design-system/components';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressed', { email, password });
    router.push('/dashboard');
  };

  const handleSignUp = () => {
    console.log('Sign up pressed');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.neutral.white }]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.neutral.white} />

      <View style={styles.statusBarContainer}>
        <View style={styles.statusBarLeft} />
        <View style={styles.statusBarRight}>
          <View style={styles.signalBars}>
            <View style={[styles.signalBar, styles.bar1]} />
            <View style={[styles.signalBar, styles.bar2]} />
            <View style={[styles.signalBar, styles.bar3]} />
            <View style={[styles.signalBar, styles.bar4]} />
          </View>
          <View style={styles.wifiIcon} />
          <View style={styles.batteryIcon}>
            <View style={styles.batteryFrame}>
              <View style={styles.batteryFill} />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/25805b85ee9b7ab1a9bb9121e0ef8891b372b99b?width=510' }}
            style={styles.heroImage}
            contentFit="contain"
          />
        </View>

        <DisplayTitle color={colors.neutral.dark} style={styles.loginTitle}>
          Login
        </DisplayTitle>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <Button title="Login" onPress={handleLogin} />

        <View style={styles.signUpContainer}>
          <LabelLarge color={colors.neutral.dark}>
            Don't have account?{' '}
          </LabelLarge>
          <Button
            title="Sign up"
            variant="text"
            onPress={handleSignUp}
            fullWidth={false}
          />
        </View>
      </View>

      <View style={styles.homeIndicator} />
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
    paddingHorizontal: spacing.lg,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight || 0,
    height: 44,
  },
  statusBarLeft: {
    flex: 1,
  },
  statusBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 1,
    width: 20,
    height: 14,
  },
  signalBar: {
    backgroundColor: colors.neutral.dark,
    borderRadius: 1,
    width: 3,
  },
  bar1: { height: 5 },
  bar2: { height: 7 },
  bar3: { height: 10 },
  bar4: { height: 12 },
  wifiIcon: {
    width: 20,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryIcon: {
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
    borderColor: colors.neutral.dark,
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryFill: {
    width: 21,
    height: 9,
    backgroundColor: colors.neutral.dark,
    borderRadius: 1.33,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: screenWidth * 0.65,
    height: screenHeight * 0.25,
    marginBottom: spacing['3xl'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  loginTitle: {
    marginBottom: spacing['3xl'],
    alignSelf: 'flex-start',
  },
  inputContainer: {
    width: '100%',
    gap: spacing.lg,
    marginBottom: spacing['2xl'],
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: colors.neutral.dark,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: Platform.OS === 'ios' ? spacing.sm : spacing.lg,
  },
});
