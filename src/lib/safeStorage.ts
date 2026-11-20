// Storage throws in some private windows and in-app browsers; fall back quietly.
type Kind = 'local' | 'session';
const store = (kind: Kind) => (kind === 'local' ? localStorage : sessionStorage);

export function readStorage(key: string, kind: Kind = 'local'): string | null {
  try {
    return store(kind).getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key: string, value: string, kind: Kind = 'local'): void {
  try {
    store(kind).setItem(key, value);
  } catch {
    // Ignore: the choice still applies for this visit.
  }
}
