export default function (...args: unknown[]) {
  return args.filter((el) => Number.isInteger(el)).map((el) => String(el));
}
