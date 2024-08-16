import { useTranslations } from "next-intl";

export default function HomePage() {
	const t = useTranslations("HomePage");
	return (
		<div className="mx-auto max-w-prose bg-blue-200 p-12 rounded-lg">
			<h1>{t("title")}</h1>
		</div>
	);
}
