import React from 'react';
import AppRouter from "./ui/views/AppRouter";
import {useTranslation} from "react-i18next";

const App = () => {
	const { t } = useTranslation("translations");
	document.title = t("titles.batmanTvShows");
	return <AppRouter/>;
};

export default App;
