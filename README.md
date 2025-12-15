# 🤖 AI Agent Prompts Generator

A modern, AI-powered web application for generating perfect sales agent prompts. Built with React, Express, and OpenAI's GPT-4.

![AI Prompts Generator](https://img.shields.io/badge/AI-Powered-purple)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![React](https://img.shields.io/badge/React-18-blue)

## ✨ Features

- 🎨 **Modern UI** - Beautiful, Monday.com-inspired gradient design
- 🏭 **Multi-Industry Support** - Pre-built prompts for 10+ industries
- 📞 **Use Case Templates** - 16 ready-to-use agent scenarios
- 🤖 **AI Generation** - Create custom prompts using GPT-4
- 🔒 **Secure API Handling** - Backend server protects your API keys
- 📋 **One-Click Copy** - Instant clipboard access for all prompts
- 📱 **Responsive Design** - Works on all devices

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Prompt-review
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example env file
   cp env.example .env
   
   # Edit .env and add your OpenAI API key
   # OPENAI_API_KEY=sk-your-actual-key-here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   http://localhost:3000/prompts.html
   ```

## 🔧 Development

For development with auto-reload:

```bash
npm run dev
```

## 📁 Project Structure

```
Prompt-review/
├── prompts.html          # Main frontend application
├── server.js             # Express backend server
├── package.json          # Node.js dependencies
├── .env                  # Environment variables (DO NOT COMMIT)
├── env.example           # Example environment file
├── .gitignore           # Git ignore rules
├── batch_prompts.json   # Batch prompt data
├── mapping.json         # Mapping configuration
└── README.md            # This file
```

## 🔐 Security Best Practices

### ⚠️ IMPORTANT: Never commit your `.env` file!

The `.env` file contains your sensitive API keys. Always:

1. ✅ Keep `.env` in `.gitignore`
2. ✅ Use `env.example` for documentation
3. ✅ Set API keys as environment variables in production
4. ❌ Never hardcode API keys in your code
5. ❌ Never commit `.env` to GitHub

### GitHub Deployment

When deploying to production services (Heroku, Vercel, Railway, etc.):

1. Add `OPENAI_API_KEY` as an environment variable in your hosting platform
2. Don't use the `.env` file in production
3. The server will automatically use the environment variables

## 🎯 Usage

### Using Pre-built Templates

1. Select your industry from the dropdown
2. Choose a use case from the sidebar
3. View the three prompt sections:
   - **Introduction** - Agent opening script
   - **Discussion Points** - What to talk about
   - **Guardrails** - What to avoid
4. Click "Copy" to add any section to clipboard

### Generating Custom Prompts with AI

1. Click "🤖 Generate with AI" button
2. Describe your specific agent behavior needs
3. Click "Generate Prompts"
4. Review and copy the AI-generated prompts

## 🌐 API Endpoints

### `POST /api/generate-prompt`

Generate custom prompts using AI.

**Request:**
```json
{
  "prompt": "Create a prompt for following up with trial users",
  "industry": "saas",
  "category": "prospecting"
}
```

**Response:**
```json
{
  "intro": "Hi {{Name}}, this is...",
  "discuss": "1. Ask about their experience...",
  "avoid": "Do not pressure them..."
}
```

### `GET /api/health`

Check server health and API key configuration.

**Response:**
```json
{
  "status": "ok",
  "hasApiKey": true
}
```

## 🎨 Customization

### Changing Colors

The app uses a gradient color scheme. Edit `prompts.html` to customize:

```javascript
// Main gradient
className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500"

// Intro section
className="bg-gradient-to-r from-purple-500 to-blue-500"

// Discussion section  
className="bg-gradient-to-r from-green-500 to-emerald-500"

// Guardrails section
className="bg-gradient-to-r from-red-500 to-pink-500"
```

### Adding Industries

Edit the `industries` array in `prompts.html`:

```javascript
const industries = [
  { id: 'your_industry', name: 'Your Industry Name' },
  // ...
];
```

### Adding Use Cases

Add new use cases to the `useCases` object:

```javascript
const useCases = {
  prospecting: [
    { id: 'your_usecase', title: 'Your Use Case Title' },
    // ...
  ]
};
```

Then add the prompt content in `getPrompts()`:

```javascript
your_usecase: {
  title: 'Your Use Case Title',
  intro: '...',
  discuss: '...',
  avoid: '...'
}
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project however you'd like!

## 🆘 Troubleshooting

### "Failed to generate prompt"

- Check that your OpenAI API key is correctly set in `.env`
- Verify you have API credits in your OpenAI account
- Check the server console for detailed error messages

### Port already in use

```bash
# Change the port in .env
PORT=3001
```

### Server won't start

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Check the OpenAI API documentation
- Review the console logs for error details

---

Made with ❤️ and powered by OpenAI GPT-4





