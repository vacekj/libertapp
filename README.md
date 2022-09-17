# libert.app

Censorship-resistant protocol frontends.

## Getting Started

```bash
# Install Rust (https://www.rust-lang.org/tools/install)
# Install Node

# Install pnpm
npm i -g pnpm

# Install dependencies
pnpm install

# Copy & fill environments
cp .env.local.example .env.local
```

## Development

I recommend developing in VSCode and installing all recommended workspace plugins listed in `.vscode/extensions.json`.

```bash
# Start nextjs frontend
pnpm dev

# Start tauri & nextjs frontend inside
pnpm run tauri dev
```
