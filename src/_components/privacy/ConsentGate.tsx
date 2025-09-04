"use client";
import React, { useEffect, useState } from "react";
import { readConsent, type ConsentState } from "./CookieBanner";

export default function ConsentGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<ConsentState>("unknown");

  useEffect(() => {
    // initial read
    setState(readConsent());

    // react to banner changes without reload
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as
        | { state?: ConsentState }
        | undefined;
      if (detail?.state) setState(detail.state);
      else setState(readConsent());
    };
    window.addEventListener("cookie-consent-changed", handler);
    return () => window.removeEventListener("cookie-consent-changed", handler);
  }, []);

  if (state !== "accepted") return null;
  return <>{children}</>;
}
