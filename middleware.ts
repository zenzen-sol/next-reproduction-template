import { locales } from "@/localization/config";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

const handleI18nRouting = createMiddleware({
	// A list of all locales that are supported
	locales: locales,
	// Used when no locale matches
	defaultLocale: "en",
	localePrefix: "as-needed",
	localeDetection: true,
	alternateLinks: true,
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/((?!api|_next|_vercel|admin|.*\\..*).*)"],
};

export default async function middleware(request: NextRequest) {
	const response = handleI18nRouting(request);

	return response;
}
