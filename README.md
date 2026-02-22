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

### Run Without Installing (Recommended)

```bash
npx anzenza
# Or with yarn
yarn anzenza
# Or with pnpm
pnpm anzenza
```

## Usage

Simply run the command and follow the interactive prompts:

```bash
anzenza

# Or with npx:
npx anzenza
```

## Available Templates

Anzenza supports a variety of popular templates including:

- **Portfolio(Vite + React)** - Portfolio website template
- **Dashboard(Vite + React)** - Dashboard with credentials auth template
- **Backend(Express.js)** - Backend with credentials auth template
- **AI Chat(Next.js + Genkit + PostgreSQL)** - AI Chatbot starter template

- **And many more...**

_Note: Template availability may vary. Run `anzenza` to see current options._

## Examples

### Creating a Portfolio Project

```bash
npx anzenza
# Enter project name: "my-portfolio-app"
# Select "Portfolio(Vite + React)" template
# Install dependencies
cd my-portfolio-app
npm start
```

### Creating a REST API Project

```bash
npx anzenza
# Enter project name: "my-rest-api-app"
# Select "Backend(Express.js)" template
# Install dependencies
cd my-rest-api-app
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

1. Update the template configuration in [`index.js`](index.js)
2. Test the template thoroughly
3. Update this README with the new template info
4. Submit a PR

## Issues

For any issues or feature requests, please create a [GitHub Issue](https://github.com/mpiers110/anzenza/issues)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE.md) file for details.

---
