/**
 * Game state management
 */

/**
 * @system StateManagement
 * @component StateManager
 * @description Frontend state management system
 * @dependencies None
 * @author Luke
 * @lastModified 2025-03-17
 */

class StateManager {
    constructor() {
        this.state = {
            gameStarted: false,
            currentScreen: 'main',
            playerStats: {},
            gameProgress: {}
        };
        console.log("StateManager initialized");
    }

    getState() {
        return this.state;
    }

    updateState(newState) {
        this.state = { ...this.state, ...newState };
        console.log("State updated:", this.state);
    }

    resetState() {
        this.state = {
            gameStarted: false,
            currentScreen: 'main',
            playerStats: {},
            gameProgress: {}
        };
        console.log("State reset to default");
    }
}

export { StateManager };
