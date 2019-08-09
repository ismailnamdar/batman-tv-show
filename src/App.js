import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./ui/views/AppRouter";

const App = () => {
	return <Provider store={store}>
		<AppRouter/>
	</Provider>;
};

export default App;
