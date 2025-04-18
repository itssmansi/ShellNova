const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const os = require('os');

const app = express();
const port = 3000;

// Middleware
app.use(cors());  // Allow requests from any origin
app.use(express.json());  // Parse JSON bodies

// POST route for running terminal commands
app.post('/run', (req, res) => {
  const { command } = req.body;  // Extract the command from the request body

  // Check if on Windows
  const isWindows = os.platform() === 'win32';

  // If on Windows, translate 'ls' to 'dir'
  const cmdToRun = isWindows && command === 'ls' ? 'dir' : command;

  // Execute the command
  exec(cmdToRun, (error, stdout, stderr) => {
    if (error) {
      return res.json({ output: `Error: ${error.message}` });
    }
    if (stderr) {
      return res.json({ output: `stderr: ${stderr}` });
    }
    res.json({ output: stdout });  // Send the command output as a response
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
