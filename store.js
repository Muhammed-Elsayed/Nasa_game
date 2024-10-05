// store.js
import { create } from "zustand";
// Helper function to generate random items

// Initial values for available animals and elements

const useStore = create((set) => ({
  // for video
  isPlaying: false,

  // Actions to update the state
  setPlaying: (isPlaying) => {
    console.log("setPlaying called with:", isPlaying); // Log state updates
    set({ isPlaying });
  },
  isVideoFinished: false,

  setIsVideoFinished: (isVideoFinished) => {
    console.log("setPlaying called with:", isVideoFinished); // Log state updates
    set({ isVideoFinished });
  },
  // Initial state
  rain: 0,
  generate: false,
  gameStarted: false,
  setGameStarted: (gameStarted) => {
    // console.log("setPlaying called with:", gameStarted); // Log state updates
    set({ gameStarted });
  },
  numOfForestAnimals: 20,
  numOfForestTrees: 50,

  fishes: 20,
  iceAnimals: 10,

  numOfCamels: 10,
  numOfIceLayers: 40,
  numOfWaterLayers: 120,

  temp: 30, //min 34
  humidity: 28,

  plastic: 0,
  factoryEmissions: 0,

  windSpeed: 6,
  windDirection: 0,

  // Actions to update the state
  setRain: (value) =>
    set((state) => ({
      rain: Math.max(0, Math.min(value, 100)), // Max 100, Min 0
    })),
  setGenerate: (value) => set({ generate: value }),

  setNumOfForestAnimals: (value) => set({ numOfForestAnimals: value }),
  setNumOfForestTrees: (value) => set({ numOfForestTrees: value }),

  setFishes: (value) => set({ fishes: value }),
  setIceAnimals: (value) => set({ iceAnimals: value }),

  setNumOfCamels: (value) => set({ numOfCamels: value }),
  setNumOfIceLayers: (value) => set({ numOfIceLayers: value }),
  setNumOfWaterLayers: (value) => set({ numOfWaterLayers: value }),

  setTemp: (value) =>
    set((state) => ({
      temp: Math.max(34, Math.min(value, 50)), // Max 50, Min 34
    })),

  setHumidity: (value) =>
    set((state) => ({
      humidity: Math.max(0, Math.min(value, 100)), // Max 100, Min 0
    })),
  setPlastic: (value) =>
    set((state) => ({
      plastic: Math.max(0, Math.min(value, 1000)), // Max 1000, Min 0
    })),
  setFactoryEmissions: (value) =>
    set((state) => ({
      factoryEmissions: Math.max(0, Math.min(value, 6)), // Max 500, Min 0
    })),
  setWindSpeed: (value) => set({ windSpeed: value }),
  setWindDirection: (value) =>
    set((state) => ({
      windDirection: state.windDirection + value,
    })),
}));

export default useStore;
