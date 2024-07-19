import Footer from "@/components/common/footer/footer";
import MainMenubar from "@/components/common/header/main-menubar";
import Topbar from "@/components/common/header/topbar";
import { config } from "@/helpers/config";
import { montserrat } from "@/helpers/fonts";
import "@/styles/index.scss";

export const metadata = {
	title: {
		template: `%s | ${config.project.name}`,
		default: config.project.name,
	},
	description: config.project.description,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body suppressHydrationWarning={true}>
				<Topbar />

				<MainMenubar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
