"use client";
import React from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

export type ConsentState = "accepted" | "rejected" | "unknown";

export function readConsent(): ConsentState {
  const v = getCookieConsentValue("cookie_consent");
  if (v === "true") return "accepted";
  if (v === "false") return "rejected";
  return "unknown";
}

export default function CookieBanner({
  onAccept,
  onReject,
}: {
  onAccept?: () => void;
  onReject?: () => void;
}) {
  const notify = (state: ConsentState) => {
    // Let listeners (ConsentGate) react without a full reload
    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", { detail: { state } })
    );
  };

  return (
    <CookieConsent
      cookieName="cookie_consent"
      enableDeclineButton
      onAccept={() => {
        onAccept?.();
        notify("accepted");
      }}
      onDecline={() => {
        onReject?.();
        notify("rejected");
      }}
      buttonText="Accept"
      declineButtonText="Reject"
      expires={180}
      sameSite="lax"
      location="bottom"
      containerClasses="ckc-container"
      contentClasses="ckc-content"
      buttonClasses="ckc-accept"
      declineButtonClasses="ckc-decline"
    >
      We use cookies to improve your experience and analyze traffic. Choose
      Accept to enable non-essential cookies.
    </CookieConsent>
  );
}
