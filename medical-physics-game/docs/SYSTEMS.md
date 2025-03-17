<!--
@system Documentation
@component SystemsArchitecture
@description Documentation of the Medical Physics Game system architecture
@dependencies None
@author Luke
@lastModified 2025-03-17
-->

# Medical Physics Game - Systems Architecture

This document outlines the system architecture of the Medical Physics Game, documenting the purpose, components, and interactions of each system.

## Core Systems

These foundational systems provide functionality used across all features.

### State Management System
- **Purpose**: Maintains game state across systems, handles saving/loading
- **Key Components**: 
  - Backend state manager (`backend/core/state_manager.py`)
  - Frontend state manager (`frontend/src/core/state_manager.js`)
- **Key Functions**: `getState()`, `setState()`, `subscribe()`, `saveGame()`, `loadGame()`

### Event System
- **Purpose**: Facilitates communication between components
- **Key Components**: 
  - Event system (`frontend/src/core/event_system.js`)
- **Key Events**: `GAME_STARTED`, `NODE_SELECTED`, `QUESTION_ANSWERED`, `SKILL_UNLOCKED`

### Map Generation System
- **Purpose**: Creates procedural game maps/floors
- **Key Components**: 
  - Map generator (`backend/core/map_generator.py`)
- **Key Functions**: `generate_map()`, `place_nodes()`

### Difficulty Management System
- **Purpose**: Adjusts game challenge based on player progress
- **Key Components**: 
  - Difficulty manager (`backend/core/difficulty_manager.py`)
- **Key Functions**: `calculate_difficulty()`, `adjust_node_difficulty()`

## Feature Systems

### Skill Tree System
- **Purpose**: Provides progression mechanics and skill unlocks
- **Key Components**:
  - Skill tree manager (`backend/core/skill_tree_manager.py`)
  - Skill tree controller (`frontend/src/systems/skill_tree/skill_tree_controller.js`)
  - Skill tree renderer (`frontend/src/systems/skill_tree/skill_tree_renderer.js`)
- **Dependencies**: State Management, Event System

### Node System
- **Purpose**: Handles different types of map nodes and encounters
- **Key Components**:
  - Node factory (`frontend/src/entities/nodes/node_factory.js`)
  - Node registry (`frontend/src/entities/nodes/node_registry.js`)
  - Various node types (question, patient case, etc.)
- **Dependencies**: State Management, Event System

### Question System
- **Purpose**: Manages educational questions and answers
- **Key Components**:
  - Question model (`backend/data/models/question.py`)
  - Question repository (`backend/data/repositories/question_repo.py`)
  - Question node component (`frontend/src/entities/nodes/node_types/question_component.js`)
- **Dependencies**: Node System, State Management

### Patient Case System
- **Purpose**: Provides clinical case studies
- **Key Components**:
  - Patient case model (`backend/data/models/patient_case.py`)
  - Patient case repository (`backend/data/repositories/patient_case_repo.py`)
  - Patient case node component (`frontend/src/entities/nodes/node_types/patient_case_component.js`)
- **Dependencies**: Question System, State Management

### Character System
- **Purpose**: Manages player character and progression
- **Key Components**:
  - Character model (`backend/data/character.py`)
  - Character repository (`backend/data/repositories/character_repo.py`)
  - Character routes (`backend/api/character_routes.py`)
- **Dependencies**: State Management, Skill Tree System

## UI Systems

### Animation System
- **Purpose**: Provides animation capabilities
- **Key Components**:
  - Animation utilities (`frontend/src/ui/utils/animation.js`)

### Sound System
- **Purpose**: Handles game audio
- **Key Components**:
  - Sound manager (`frontend/src/ui/utils/sound_manager.js`)

## Utility Systems

### Analytics System
- **Purpose**: Tracks usage data
- **Key Components**:
  - Backend analytics (`backend/utils/analytics.py`)
  - Frontend analytics client (`frontend/src/utils/data/analytics_client.js`)

### Logging System
- **Purpose**: System logging and debugging
- **Key Components**:
  - Logging utilities (`backend/utils/logging.py`)

### Caching System
- **Purpose**: Improves performance through caching
- **Key Components**:
  - Cache implementation (`backend/utils/cache.py`)

### Profiling System
- **Purpose**: Identifies performance bottlenecks
- **Key Components**:
  - Performance profiler (`backend/utils/profiler.py`)