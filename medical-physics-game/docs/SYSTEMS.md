<!--
@system Documentation
@component SystemsArchitecture
@description Documentation of the Medical Physics Game system architecture
@dependencies None
@author Luke
@lastModified 2025-03-17
-->

# Medical Physics Game - Systems Architecture

## Core Systems
These foundational systems provide functionality used across all features.

### State Management
- **Backend Files**: 
  - `backend/core/state_manager.py` - Game state persistence
- **Frontend Files**:
  - `frontend/src/core/state_manager.js` - Frontend state management
- **Purpose**: Maintains game state across systems, handles saving/loading
- **Key Functions**: `getState()`, `setState()`, `subscribe()`, `saveGame()`, `loadGame()`
- **Standardization Issues**: 
  - Duplicate file `backend/core/state_manager.py.new` should be removed
  - Duplicate symlinks in project root

### Event System
- **Frontend Files**: 
  - `frontend/src/core/event_system.js` - Event handling
- **Purpose**: Facilitates communication between components
- **Key Events**: `GAME_STARTED`, `NODE_SELECTED`, `QUESTION_ANSWERED`, `SKILL_UNLOCKED`
- **Standardization Issues**:
  - Duplicate file `frontend/src/core/frontend/src/core/event_system.js`
  - Multiple symlinks to this file

### Map Generation
- **Backend Files**:
  - `backend/core/map_generator.py` - Procedural map generation
- **Frontend Files**:
  - None (Map is generated on the backend)
- **Purpose**: Creates procedural game maps/floors
- **Key Functions**: `generate_map()`, `place_nodes()`

### Difficulty Manager
- **Backend Files**:
  - `backend/core/difficulty_manager.py` - Difficulty scaling
- **Purpose**: Adjusts game challenge based on player progress
- **Key Functions**: `calculate_difficulty()`, `adjust_node_difficulty()`

## Feature Systems

### Character System
- **Backend**:
  - `backend/api/character_routes.py` - API endpoints
  - `backend/data/models/character.py` - Character model
  - `backend/data/repositories/character_repo.py` - Data access
  - `data/characters/characters.json` - Character definitions
- **Frontend**:
  - `frontend/src/entities/player/` - Player character logic
  - `frontend/ui/components/character_panel.js` - Character UI
  - `frontend/static/js/character_creator.js` - Character creation
  - `frontend/static/js/character_select.js` - Character selection
- **Templates/CSS**:
  - `frontend/templates/pages/character_create.html` - Character creation
  - `frontend/templates/pages/character_select.html` - Character selection
  - `frontend/static/css/components/character.css` - Styling
- **Dependencies**: State Management, Event System
- **Standardization Issues**:
  - `character_creator.js` and `character_select.js` should be moved to a consistent location
  - Duplicate character_select.html.bak should be removed

### Skill Tree System
- **Backend**:
  - `backend/api/skill_tree_routes.py` - API endpoints
  - `backend/core/skill_tree_manager.py` - Business logic
  - `backend/data/models/skill_tree.py` - Data models
  - `backend/data/repositories/skill_tree_repo.py` - Data access
  - `data/skill_tree/skill_tree.json` - Skill tree configuration
- **Frontend**:
  - `frontend/src/systems/skill_tree/index.js` - Main entry point
  - `frontend/src/systems/skill_tree/skill_tree_controller.js` - Controller
  - `frontend/src/systems/skill_tree/skill_tree_data.js` - Data handling
  - `frontend/src/systems/skill_tree/skill_tree_renderer.js` - Renderer
  - `frontend/src/systems/skill_tree/skill_tree_ui.js` - UI components
  - `frontend/src/systems/effects/skill_effect_system.js` - Skill effects
- **Templates/CSS**:
  - `frontend/templates/pages/skill_tree.html` - Skill tree page
  - `frontend/static/css/components/skill_tree.css` - Styling
- **Dependencies**: State Management, Event System, Character System

### Node/Map System
- **Backend**:
  - `backend/core/map_generator.py` - Map generation
  - `data/maps/floors.json` - Floor definitions
  - `data/maps/node_templates.json` - Node templates
  - `data/maps/node_types.json` - Node type definitions
- **Frontend**:
  - `frontend/src/entities/nodes/node_factory.js` - Node creation
  - `frontend/src/entities/nodes/node_registry.js` - Node registration
  - `frontend/src/entities/nodes/node_types/` - Node type components
  - `frontend/ui/components/map_renderer.js` - Map visualization
  - `frontend/ui/components/node_interaction.js` - Node interaction
- **Templates/CSS**:
  - `frontend/static/css/components/map.css` - Map styling
  - `frontend/static/css/components/nodes.css` - Node styling
- **Dependencies**: State Management, Event System, Character System
- **Standardization Issues**:
  - Node types are spread across multiple directories
  - Inconsistent naming for node components

### Question System
- **Backend**:
  - `backend/api/question_routes.py` - API endpoints
  - `backend/data/models/question.py` - Question model
  - `backend/data/repositories/question_repo.py` - Data access
  - `data/questions/questions.json` - Question database
  - `plugins/question_plugin.py` - Question plugins
- **Frontend**:
  - `frontend/src/entities/nodes/node_types/question_component.js` - Question node
- **Dependencies**: Node System, State Management
- **Standardization Issues**:
  - `question.py.bak` backup file should be removed
  - Question categories are in subdirectories but not well integrated

### Patient Case System
- **Backend**:
  - `backend/data/models/patient_case.py` - Patient case model
  - `backend/data/repositories/patient_case_repo.py` - Data access
  - `data/questions/patient_cases/` - Patient case definitions
- **Frontend**:
  - `frontend/src/entities/nodes/node_types/patient_case_component.js` - Patient case node
- **Dependencies**: Question System, State Management

### Item System
- **Backend**:
  - `backend/api/item_routes.py` - API endpoints
  - `backend/data/models/item.py` - Item model
  - `backend/data/repositories/item_repo.py` - Data access
  - `data/items/items.json` - Item definitions
- **Frontend**:
  - `frontend/src/core/item_manager.js` - Item management
  - `frontend/ui/components/inventory_panel.js` - Inventory UI
  - `frontend/ui/components/inventory_system.js` - Inventory logic
- **Templates/CSS**:
  - `frontend/static/css/components/inventory.css` - Styling
- **Dependencies**: State Management, Character System

### Combat System
- **Backend**:
  - `backend/core/combat_system.py` - Combat mechanics
- **Frontend**:
  - `frontend/src/systems/combat/` - Combat implementation
- **Dependencies**: Character System, State Management, Event System

### Feedback System
- **Backend**:
  - `backend/api/feedback_routes.py` - Feedback endpoints
- **Frontend**:
  - `frontend/ui/components/feedback_panel.js` - Feedback UI
  - `frontend/ui/components/feedback_system.js` - Feedback logic
- **Dependencies**: State Management

## UI Systems

### HUD Components
- **Files**:
  - `frontend/src/ui/hud/` - HUD components
- **Purpose**: Display player information during gameplay
- **Dependencies**: State Management, Character System

### Screens
- **Files**:
  - `frontend/src/ui/screens/` - Game screens
  - `frontend/templates/pages/` - Page templates
- **Purpose**: Main navigation screens
- **Dependencies**: State Management, Event System

### Animation System
- **Files**:
  - `frontend/src/ui/utils/animation.js` - Animation utilities
  - `frontend/src/ui/utils/animation_demo.js` - Animation examples
- **Purpose**: Provides animation capabilities
- **Standardization Issues**:
  - Demo files should be moved to a examples/ or dev_tools/ directory

### Sound System
- **Files**:
  - `frontend/src/ui/utils/sound_manager.js` - Sound management
  - `frontend/src/ui/utils/sound_demo.js` - Sound examples
- **Purpose**: Handles game audio
- **Standardization Issues**:
  - Demo files should be moved to a examples/ or dev_tools/ directory

## Utility Systems

### Analytics
- **Backend Files**:
  - `backend/utils/analytics.py` - Backend analytics
- **Frontend Files**:
  - `frontend/src/utils/data/analytics_client.js` - Frontend analytics
- **Purpose**: Tracks usage data

### Caching
- **Backend Files**:
  - `backend/utils/cache.py` - Caching implementation
- **Purpose**: Improves performance through caching

### Logging
- **Backend Files**:
  - `backend/utils/logging.py` - Logging utilities
- **Purpose**: System logging and debugging

### Profiling
- **Backend Files**:
  - `backend/utils/profiler.py` - Performance profiling
- **Purpose**: Identifies performance bottlenecks

## Major Standardization Issues

1. **Duplicate Files**:
   - `state_manager.py` and `state_manager.py.new`
   - `event_system.js` duplicates
   - Multiple `.bak` files throughout the codebase
   - Bootstrap.js duplicates

2. **Symlinks**:
   - Unnecessary symlinks in project root and `frontend/static/js/core/`
   - Creates confusion about the true source of files

3. **Inconsistent Directory Structure**:
   - Node components spread across multiple directories
   - UI components in different locations
   - Some systems follow different organizational patterns

4. **Inconsistent Naming**:
   - Mix of snake_case and camelCase
   - Inconsistent use of suffixes (_component, _system, etc.)
   - Different naming patterns for similar components

5. **Backup Files**:
   - Multiple backup directories and files
   - Should be moved to a proper backup system or version control

## Recommendations

1. **File Cleanup**:
   - Remove all `.bak` files
   - Delete duplicate files
   - Remove unnecessary symlinks
   - Move backup directories outside the project

2. **Naming Standardization**:
   - Standardize on snake_case for all filenames
   - Use consistent suffixes (_component, _controller, _manager)
   - Rename files to follow patterns

3. **Directory Reorganization**:
   - Consolidate node components into a single directory
   - Move demo/example files to appropriate folders
   - Ensure each system follows the same organizational pattern

4. **Documentation Improvement**:
   - Add system headers to all files
   - Create README.md files in key directories
   - Document connections between systems