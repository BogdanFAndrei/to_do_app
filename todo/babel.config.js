/**
 * Babel Configuration File
 * 
 * This file configures Babel for the Expo React Native application.
 * It sets up the necessary presets and plugins for transpiling modern JavaScript
 * and React Native specific features.
 * 
 * Configuration includes:
 * - babel-preset-expo: Preset for Expo React Native applications
 * - react-native-reanimated/plugin: Plugin for React Native Reanimated animations
 * 
 * @module babel.config
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};
