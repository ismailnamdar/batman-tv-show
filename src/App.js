import React from 'react';
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./ui/views/AppRouter";

const App = () => {
	const { t } = useTranslation("translations");
	document.title = t("titles.batmanTvShows");
	return <Provider store={store}>
		<AppRouter/>
	</Provider>;
};

export default App;
