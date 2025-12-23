# Anzenza

A node-based CLI tool to bootstrap your next web project with popular templates and starter configurations.

[![npm version](https://badge.fury.io/js/anzenza.svg)](https://badge.fury.io/js/anzenza)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Features

- **Quick Setup** - Bootstrap projects in seconds
- **Multiple Templates** - Support for various frameworks and tools
- **Interactive CLI** - Beautiful prompts powered by @clack/prompts
- **Zero Config** - Just run and go!

## Installation

### Global Installation
```bash
npm install -g anzenza
# Using Yarn
yarn global add anzenza

# Using pnpm
pnpm add -g anzenza
```

### Run Without Installing (Recommended)
```bash
npx anzenza
```

## Usage

Simply run the command and follow the interactive prompts:

```bash
anzenza

# Or with npx:
npx anzenza
```

The CLI will guide you through:
1. **Project Name** - Choose a name for your new project
2. **Template Selection** - Pick from available templates
3. **Package Manager** - Select npm, yarn, or pnpm
4. **Installation** - Automatically install dependencies

## Available Templates

Anzenza supports a variety of popular templates including:

- **React** - Create React App and Vite configurations
- **Next.js** - Full-stack React framework
- **Vue.js** - Progressive JavaScript framework
- **Svelte** - Cybernetically enhanced web apps
- **Express.js** - Fast, unopinionated web framework
- **And many more...**

*Note: Template availability may vary. Run `anzenza` to see current options.*

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Dependencies
- **@clack/prompts** - Beautiful CLI prompts
- **axios** - HTTP client for API requests
- **execa** - Better child_process
- **picocolors** - Terminal colors
- **rimraf** - Cross-platform rm -rf

## Examples

### Creating a React Project
```bash
npx anzenza
# Select "React" template
# Choose your preferred package manager
# Enter project name: "my-react-app"
cd my-react-app
npm start
```

### Creating a Next.js Project
```bash
npx anzenza
# Enter project name: "my-next-app"
# Select "Next.js" template
cd my-next-app
npm run dev
```

## Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Adding New Templates
To add a new template:
1. Update the template configuration in `index.js`
2. Test the template thoroughly
3. Update this README with the new template info
4. Submit a PR

## Issues & Support

- **Bug Reports**: [GitHub Issues](https://github.com/mpiers110/anzenza/issues)
- **Feature Requests**: [GitHub Issues](https://github.com/mpiers110/anzenza/issues)
- **Questions**: [GitHub Discussions](https://github.com/mpiers110/anzenza/discussions)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---
