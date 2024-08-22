"use server";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const HomePage = ({ params: { locale } }: { params: { locale: string } }) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations("HomePage");
	return (
		<div className="mx-auto max-w-prose bg-blue-200 p-12 rounded-lg">
			<h1>{t("title")}</h1>
		</div>
	);
};

export default HomePage;
