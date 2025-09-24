import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { useThemeColor } from '@/hooks/use-theme-color';
import { router } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  const handleLogin = () => {
    console.log('Login pressed', { email, password });
    // Navigate to dashboard after login
    router.push('/dashboard');
  };

  const handleSignUp = () => {
    console.log('Sign up pressed');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ffffff' }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View style={styles.statusBarContainer}>
        <View style={styles.statusBarLeft}>
          <Text style={styles.timeText}>9:41</Text>
        </View>
        <View style={styles.statusBarRight}>
          <View style={styles.signalBars}>
            <View style={[styles.signalBar, styles.bar1]} />
            <View style={[styles.signalBar, styles.bar2]} />
            <View style={[styles.signalBar, styles.bar3]} />
            <View style={[styles.signalBar, styles.bar4]} />
          </View>
          <View style={styles.wifiIcon}>
            <Text style={styles.iconText}>📶</Text>
          </View>
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

        <Text style={[styles.loginTitle, { color: textColor }]}>Login</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { borderColor: 'rgba(0, 0, 0, 0.15)', color: textColor }]}
            placeholder="Enter your email"
            placeholderTextColor="#BDBDBD"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            style={[styles.input, { borderColor: 'rgba(0, 0, 0, 0.15)', color: textColor }]}
            placeholder="Enter your password"
            placeholderTextColor="#BDBDBD"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.homeIndicator} />
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
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight || 0,
    height: 44,
  },
  statusBarLeft: {
    flex: 1,
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
  bar1: {
    height: 5,
  },
  bar2: {
    height: 7,
  },
  bar3: {
    height: 10,
  },
  bar4: {
    height: 12,
  },
  wifiIcon: {
    width: 20,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: '#333333',
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
  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: screenWidth * 0.65,
    height: screenHeight * 0.25,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  loginTitle: {
    fontSize: 34,
    fontWeight: '500',
    letterSpacing: -0.34,
    marginBottom: 40,
    alignSelf: 'flex-start',
    color: '#333333',
  },
  inputContainer: {
    width: '100%',
    gap: 20,
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 17,
    letterSpacing: -0.17,
    backgroundColor: '#ffffff',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#2F80ED',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: -0.17,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 15,
    color: '#333333',
    letterSpacing: -0.15,
  },
  signUpLink: {
    fontSize: 15,
    color: '#6E85E3',
    letterSpacing: -0.15,
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#333333',
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: Platform.OS === 'ios' ? 8 : 16,
  },
});
