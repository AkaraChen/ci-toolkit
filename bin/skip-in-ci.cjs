const envs = [
  'CI',
  'GITHUB_ACTIONS',
  'GITLAB_CI',
  'CIRCLECI',
  'TRAVIS',
]

const command = process.argv[2]
if (!command) {
  console.error('Usage: skip-in-ci <command> [args...]')
  process.exit(1)
}

if (envs.some(env => process.env[env])) {
  console.log(`Skipping "${command}" in CI environment`)
  process.exit(0)
}

const spawn = require('child_process').spawn
const child = spawn(command, process.argv.slice(3), { stdio: 'inherit' })
child.on('exit', process.exit)
