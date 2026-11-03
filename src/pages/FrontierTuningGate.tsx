import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// SHA-256 of the access password. This is a light gate for casual visitors, not
// strong security: anything shipped to the browser can be extracted by a
// determined person.
const PASSWORD_HASH = '878c240fd717f39d8cec9f7a5cf936873ffcc0757beef703ad2c5f9ed1890344';
const STORAGE_KEY = 'ft-access';

// The case study stays in its own chunk and is only requested after unlock.
const FrontierTuning = lazy(() => import('./FrontierTuning'));

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function readUnlocked(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === PASSWORD_HASH;
  } catch {
    return false;
  }
}

const FrontierTuningGate = () => {
  const [unlocked, setUnlocked] = useState<boolean>(readUnlocked);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex, nofollow';
    document.head.appendChild(robots);
    const previousTitle = document.title;
    document.title = 'Password protected | Jessica Downey';
    return () => {
      robots.remove();
      document.title = previousTitle;
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hash = await sha256(value.trim());
    if (hash === PASSWORD_HASH) {
      try {
        sessionStorage.setItem(STORAGE_KEY, hash);
      } catch {
        // Storage can be unavailable (private windows); the page still unlocks for this visit.
      }
      setError(false);
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (unlocked) {
    return (
      <Suspense fallback={null}>
        <FrontierTuning />
      </Suspense>
    );
  }

  return (
    <ThemeProvider>
      <main className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground">
        <form onSubmit={submit} className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-semibold text-primary">This case study is password protected</h1>
          <p className="text-foreground/70">
            Enter the password I shared with you to read the Frontier Tuning case study.
          </p>
          <label htmlFor="ft-password" className="sr-only">
            Password
          </label>
          <Input
            id="ft-password"
            type="password"
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-invalid={error}
            aria-describedby={error ? 'ft-password-error' : undefined}
          />
          {error && (
            <p id="ft-password-error" role="alert" className="text-sm text-destructive">
              That password isn't right. Try again.
            </p>
          )}
          <div className="flex items-center gap-4">
            <Button type="submit">View case study</Button>
            <Link to="/" className="text-sm text-primary hover:underline">
              Back to portfolio
            </Link>
          </div>
        </form>
      </main>
    </ThemeProvider>
  );
};

export default FrontierTuningGate;
