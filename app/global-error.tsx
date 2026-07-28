"use client";

import Link from "next/link";
import { useEffect } from "react";

/*
 * Replaces the root layout when an uncaught render error escapes any
 * other error boundary. Must declare its own <html> + <body>.
 * Keep it intentionally minimal and self-contained — design tokens may
 * not have loaded if the error is severe.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Forward to monitoring when wired up (Phase 4+).
    console.error("[GlobalError]", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          backgroundColor: "#FAFAFA",
          color: "#0A0B14",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#5C5F70",
          }}
        >
          Something went wrong
        </p>
        <h1
          style={{
            marginTop: "1rem",
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            textAlign: "center",
            maxWidth: "32rem",
          }}
        >
          We hit an unexpected error.
        </h1>
        <p
          style={{
            marginTop: "1rem",
            maxWidth: "32rem",
            textAlign: "center",
            lineHeight: 1.6,
            color: "#5C5F70",
          }}
        >
          The error has been logged. Try again, or head back home and pick up where you left off.
        </p>
        {error.digest ? (
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.75rem",
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              color: "#9CA0AE",
            }}
          >
            ref {error.digest}
          </p>
        ) : null}
        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem" }}>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              height: "2.5rem",
              padding: "0 1.25rem",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "#5B4CDB",
              color: "#FFFFFF",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
          <Link
            href="/"
            style={{
              height: "2.5rem",
              padding: "0 1.25rem",
              borderRadius: "0.5rem",
              border: "1px solid #E5E7EE",
              color: "#0A0B14",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
