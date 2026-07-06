import { NextResponse } from "next/server";

const DEFAULT_CAMPAIGN = "part_time_ai_contracts";

export function GET(request, { params }) {
  const requestUrl = new URL(request.url);
  const target = requestUrl.searchParams.get("to") || "/";
  const safeTarget = target.startsWith("/") && !target.startsWith("//") ? target : "/";
  const redirectUrl = new URL(safeTarget, requestUrl.origin);

  redirectUrl.searchParams.set("utm_source", "outreach");
  redirectUrl.searchParams.set("utm_medium", "email");
  redirectUrl.searchParams.set(
    "utm_campaign",
    requestUrl.searchParams.get("campaign") || DEFAULT_CAMPAIGN
  );
  redirectUrl.searchParams.set("utm_content", params.leadId);
  redirectUrl.searchParams.set("lead_id", params.leadId);

  return NextResponse.redirect(redirectUrl, 307);
}
