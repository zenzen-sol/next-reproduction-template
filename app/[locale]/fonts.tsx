import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

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
