import React from "react";
import {useTranslation} from "react-i18next";

const SearchInput = ({ onChange }) => {
	const {t} = useTranslation("translations");
	return <input placeholder={t("placeholders.searchShow")} onChange={onChange}/>;
};

export default SearchInput;