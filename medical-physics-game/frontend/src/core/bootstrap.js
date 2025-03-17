/**
 * Bootstrap application
 */

/**
 * @system Core
 * @component Bootstrap
 * @description Initializes application components and game startup
 * @dependencies ./game.js, ./state_manager.js, ./event_system.js
 * @author Luke
 * @lastModified 2025-03-17
 */

import { Game } from './game.js';
import { StateManager } from './state_manager.js';
import { EventSystem } from './event_system.js';

// Initialize the event system
const eventSystem = new EventSystem();

// Initialize the state manager
const stateManager = new StateManager();

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    const game = new Game();
    
    // Make these available globally for debugging (optional)
    window.game = game;
    window.stateManager = stateManager;
    window.eventSystem = eventSystem;
    
    // Initialize and start the game
    game.init();
    
    // Update state to indicate game has started
    stateManager.updateState({
        gameStarted: true,
        currentScreen: 'game'
    });
    
    console.log("Game bootstrap complete!");
});
