import LocaleSwitcher from "@/components/LocaleSwitcher";
import { locales } from "@/localization/config";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import {
	getMessages,
	getTranslations,
	unstable_setRequestLocale,
} from "next-intl/server";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";

export const montserrat = Montserrat({
	weight: ["300", "400", "600", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const freightBigPro = localFont({
	src: [
		{
			path: "../fonts/freight-big-pro-light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../fonts/freight-big-pro-light-italic.otf",
			weight: "300",
			style: "italic",
		},
	],
	variable: "--font-freight-big-pro",
});

type Props = {
	children: ReactNode;
	params: { locale: string };
};

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params: { locale },
}: Omit<Props, "children">) {
	const t = await getTranslations({ locale, namespace: "LocaleLayout" });

	return {
		title: t("title"),
	};
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: Props) {
	// Enable static rendering
	unstable_setRequestLocale(locale);

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html className="h-full" lang={locale}>
			<body
				className={clsx(
					montserrat.variable,
					freightBigPro.variable,
					"flex h-full flex-col",
					"font-sans",
					"p-12",
				)}
			>
				<NextIntlClientProvider messages={messages}>
					<LocaleSwitcher />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
