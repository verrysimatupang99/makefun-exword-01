const args = process.argv.slice(2);
const flags = new Set(args.filter((arg) => arg.startsWith('--')));

function renderLine(shout: boolean): string {
  const line = 'Blocked';
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return flags.has(flag);
}

function printUsage(): void {
  const usage = [
    'Usage: node main.ts [options]',
    '',
    'Options:',
    '  --shout  Print the line in uppercase',
    '  --help   Show this help message',
  ].join('\n');

  process.stderr.write(`${usage}\n`);
}

function main(): void {
  if (hasFlag('--help')) {
    printUsage();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
