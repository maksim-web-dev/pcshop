Terminal:
```
node -v
npm -v
claude --version
```
node: v24.15.0
npm: 11.12.1
claude: 2.1.145 (Claude Code)

# Connect MCP (Linux)
```
claude mcp add --scope project playwright -- npx -y @playwright/mcp@latest
```
Result:
```
Added stdio MCP server playwright with command: npx -y @playwright/mcp@latest to project config
File modified: /home/max/IdeaProjects/pcshop/.mcp.json
```

# Check mcp connection
```
claude mcp list
```
Result:
```
claude.ai Claude Docs: https://api.anthropic.com/v1/pages/mcp - ✓ Connected
```
