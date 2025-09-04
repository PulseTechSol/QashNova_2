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
    window.dispatchEvent(
      new CustomEvent("cookie-consent-changed", { detail: { state } })
    );
  };

  return (
    <CookieConsent
      location="none"
      containerClasses="ckc-card"
      contentClasses="ckc-card-content"
      buttonClasses="ckc-card-accept"
      declineButtonClasses="ckc-card-decline"
      buttonText="Accept"
      declineButtonText="Reject"
      enableDeclineButton
      cookieName="cookie_consent"
      cookieSecurity={process.env.NODE_ENV === "production"}
      sameSite="lax"
      expires={180}
      onAccept={() => {
        onAccept?.();
        notify("accepted");
      }}
      onDecline={() => {
        onReject?.();
        notify("rejected");
      }}
    >
      <div className="ckc-card-title">We use cookies</div>
      <div className="ckc-card-text">
        We use cookies to enhance your experience and analyze traffic. By
        clicking “Accept”, you consent to non-essential cookies.{" "}
        <a className="ckc-card-link" href="/privacy-policy">
          Privacy policy
        </a>
        .
      </div>
    </CookieConsent>
  );
}
