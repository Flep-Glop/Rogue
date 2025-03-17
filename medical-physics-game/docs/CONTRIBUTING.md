<!--
@system Documentation
@component ContributionGuidelines
@description Guidelines for contributing to the Medical Physics Game project
@dependencies None
@author Luke
@lastModified 2025-03-17
-->

# Medical Physics Game - Developer Guide

## Introduction

This guide outlines the development standards, workflows, and best practices for the Medical Physics Game project. Following these guidelines ensures consistent, maintainable code and effective collaboration.

## Project Architecture

The project follows a layered architecture with separate frontend and backend components, organized primarily by technical function with cross-cutting feature domains. The complete system architecture is documented in `SYSTEMS.md`.

### Key Architectural Principles

1. **System Boundaries**: Each system has clearly defined responsibilities
2. **Core vs. Feature Systems**: Core systems provide infrastructure used by feature systems
3. **Dependency Direction**: Feature systems depend on core systems, not vice versa
4. **Event-Based Communication**: Systems communicate via the event system when possible
5. **Consistent Interfaces**: Systems expose consistent API interfaces

## Development Workflow

### Getting Started

1. **Identify the System**: Determine which system(s) your work involves
2. **Consult SYSTEMS.md**: Review the relevant system details and dependencies
3. **Use the VSCode Workspace**: Open the appropriate workspace file
4. **Review Existing Code**: Understand current implementation before making changes
5. **Follow File Headers**: Check existing headers for guidance on file purpose

### Feature Development Process

1. **Plan**: Define the feature scope and identify affected systems
2. **Document**: Update or create documentation for the new feature
3. **Implement**: Write code following the standardization guidelines
4. **Test**: Verify functionality with appropriate tests
5. **Update SYSTEMS.md**: Ensure system documentation is up to date
6. **Review**: Use the collaboration protocol when seeking review

## Code Standardization Guidelines

### File Organization

1. **System Grouping**: Files belong to specific systems as defined in `SYSTEMS.md`
2. **Core Systems**: Located in `/backend/core` and `/frontend/src/core`
3. **Feature Systems**: Organized by domain within their respective frontend/backend directories
4. **Assets**: Store in appropriate `/static` subdirectories

### Naming Conventions

1. **All Files**: Use `snake_case` for filenames (e.g., `skill_tree_manager.py`)
2. **Backend Routes**: Name as `[system]_routes.py` (e.g., `character_routes.py`)
3. **Frontend Controllers**: Name as `[system]_controller.js` (e.g., `skill_tree_controller.js`)
4. **Components**: Name as `[component]_component.js` (e.g., `question_component.js`)
5. **Models**: Name as singular nouns (e.g., `character.py`, not `characters.py`)
6. **Repositories**: Name as `[model]_repo.py` (e.g., `item_repo.py`)
7. **CSS Files**: Match their corresponding component names (e.g., `skill_tree.css`)

### File Header Template

Every file should include a standardized header:

```javascript
/**
 * @system Character
 * @component CharacterSelect
 * @description Handles character selection screen logic
 * @dependencies state_manager.js, event_system.js
 * @routes /character/select
 * @author [Your Name]
 * @lastModified YYYY-MM-DD
 */
```

```python
"""
@system Character
@component CharacterRoutes
@description API endpoints for character management
@dependencies character_repo.py, state_manager.py
@routes /api/character/*
@author [Your Name]
@lastModified YYYY-MM-DD
"""
```

### Code Style

#### JavaScript

1. **ES6 Module Format**: Use import/export for all modules
2. **Function Organization**:
   - Public methods at the top
   - Private/helper methods below
   - Event handlers grouped together
3. **Import Order**:
   - Core utilities first
   - External libraries second
   - Local modules last
   - Group by category with comments

```javascript
// Core imports
import { getState, setState } from '../core/state_manager.js';
import { on, emit } from '../core/event_system.js';

// External libraries
import * as d3 from 'd3';

// Local modules
import { renderNode } from './node_renderer.js';
```

4. **Events**: Prefix event constants with system name
   ```javascript
   // Events
   const SKILL_TREE_NODE_SELECTED = 'SKILL_TREE_NODE_SELECTED';
   const SKILL_TREE_UNLOCK_REQUESTED = 'SKILL_TREE_UNLOCK_REQUESTED';
   ```

#### Python

1. **Imports**: Follow PEP8 import ordering
2. **Docstrings**: Use triple quotes for all functions and classes
3. **Type Hints**: Use type annotations where possible
4. **Routes**: Group routes by functionality with descriptive comments

```python
from typing import List, Dict, Optional
from flask import Blueprint, request, jsonify

from backend.data.models.character import Character
from backend.data.repositories.character_repo import CharacterRepository

character_routes = Blueprint('character_routes', __name__)

# Character retrieval routes
@character_routes.route('/api/characters', methods=['GET'])
def get_all_characters() -> Dict:
    """Return all characters."""
    # Implementation
```

### CSS Structure

1. **Component-Specific CSS**: Store in `/static/css/components/`
2. **Base Styles**: Store in `/static/css/base/`
3. **Variables**: Define all colors and sizes in `variables.css`
4. **Utilities**: Common utility classes in `utilities.css`
5. **BEM Notation**: Follow BEM naming convention for CSS classes

## Collaboration Protocol

When seeking help or collaborating on the codebase, use this format:

```
I'm working on the [SYSTEM] system, specifically the [COMPONENT].

Relevant files (from SYSTEMS.md):
- [COPY LIST FROM SYSTEMS.md]

Core dependencies (from SYSTEMS.md):
- [COPY DEPENDENCIES FROM SYSTEMS.md]

Here's what I'm trying to do: [DESCRIPTION]

[CODE SNIPPETS/CHANGES]

SYSTEMS.md Update (if applicable):
- [ANY CHANGES NEEDED TO SYSTEMS.md BASED ON WORK DONE]
```

## Version Control Practices

1. **Descriptive Commits**: Use meaningful commit messages
   - Format: `[System] Brief description of changes`
   - Example: `[SkillTree] Fix node unlocking animation`

2. **Feature Branches**: Create branches for each feature or bug fix
   - Format: `feature/system-name/feature-description`
   - Example: `feature/skill-tree/add-node-tooltips`

3. **Regular Commits**: Commit small, logical chunks of work
   - Avoid massive commits spanning multiple systems
   - Keep related changes together

## IDE Setup and Tools

### VSCode Configuration

1. **Workspaces**: Use system-specific workspaces for focused development
   - Located in `/dev_tools/workspaces/`
   - Example: `skill_tree.code-workspace`

2. **Recommended Extensions**:
   - ESLint for JavaScript linting
   - Pylint for Python linting
   - Python and JavaScript language extensions
   - Bookmarks for marking important files
   - Project Manager for workspace switching
   - Todo Tree for finding TODO comments

3. **Navigation Shortcuts**:
   - `Ctrl+T` - Go to symbol in project
   - `Ctrl+Shift+F` - Search across all files
   - `Ctrl+P` - Quick file open
   - `@system:skill-tree` - Custom search for system tags

### System-Specific Workspaces

Example workspace for Skill Tree system:

```json
{
  "folders": [
    {
      "path": "."
    }
  ],
  "settings": {
    "files.exclude": {
      "**/node_modules": true,
      // Hide everything except skill tree related files and core dependencies
      "frontend/src/systems/!(skill_tree)/**": true,
      "frontend/static/css/components/!(skill_tree.css)": true,
      // Keep core files visible
      "frontend/src/core/state_manager.js": false,
      "frontend/src/core/event_system.js": false
    },
    "search.exclude": {
      "**/node_modules": true,
      "frontend/src/systems/!(skill_tree)/**": true
    }
  }
}
```

## Testing Guidelines

1. **Test Organization**: Mirror the system organization in test directory
   - `/tests/backend/core/` for core backend tests
   - `/tests/frontend/systems/skill_tree/` for skill tree tests

2. **Test Naming**: Name tests to reflect what they test
   - `test_skill_tree_manager.py`
   - `skill_tree_integration.test.js`

3. **Coverage**: Aim for tests covering:
   - Core functionality of each system
   - Integration between systems
   - Critical user workflows

## Documentation Standards

1. **System Documentation**: Keep `SYSTEMS.md` updated
2. **Component READMEs**: Create README.md in key directories explaining:
   - Purpose of components in the directory
   - How they relate to each other
   - Key design decisions
   - Usage examples

3. **API Documentation**: Document all API endpoints in routes files
4. **Code Comments**: Explain "why" not just "what"
5. **Update Cycle**: Update documentation when:
   - Adding new files or components
   - Moving or renaming existing files
   - Changing system dependencies

## Common Issues and Solutions

### Finding Related Files

1. Use `SYSTEMS.md` as your primary reference
2. Use workspace file filtering for focused development
3. Search for system tags in file headers: `@system:SkillTree`

### Module Import Issues

1. Check relative path imports carefully
2. Ensure circular dependencies are avoided
3. For frontend, use consistent import patterns (ES6 modules)

### Debugging Workflow

1. Check browser console for frontend issues
2. Review server logs for backend issues
3. Use the event system debugging tools to trace events
4. Check system connections in `SYSTEMS.md`

## Implementation Plan for New Developers

As a new developer joining the project:

1. **First Week**:
   - Review `SYSTEMS.md` to understand architecture
   - Set up development environment
   - Explore VSCode workspaces
   - Make small contributions to familiarize with codebase

2. **First Month**:
   - Add file headers to existing files
   - Create workspace files for systems
   - Document a specific system thoroughly
   - Implement small features within a single system

3. **Long-term**:
   - Standardize file naming and organization
   - Improve cross-system integration
   - Add comprehensive testing
   - Refine documentation

## Conclusion

This development guide provides the foundation for organized, consistent development of the Medical Physics Game. By following these standards, we ensure a maintainable codebase and efficient collaboration between developers.

Remember that this is a living document and should be updated as the project evolves. If you encounter situations not covered by these guidelines, discuss with the team to establish new standards.
