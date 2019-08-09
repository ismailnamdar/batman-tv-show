import React, { useCallback } from "react";
import { IoIosGlobe } from "react-icons/io";
import i18n from "i18next";
import useToggle from "../../hooks/useToggle";
import { LANGUAGE_KEYS } from "../../configs/constants";

/**
 * globe icon that toggles language change
 * @returns {*}
 * @constructor
 */
const GlobeItem = () => {
	// toggle logic added just to show example custom hook logic usage
	const [flag, toggleFlag] = useToggle(true);
	const handleLanguageChange = useCallback(() => {
		// flag is true means tr, en otherwise
		i18n.changeLanguage(flag ? LANGUAGE_KEYS.TR : LANGUAGE_KEYS.EN);
		toggleFlag();
	}, [flag, toggleFlag]);
	return <li key={"globe"} className={"right"}><IoIosGlobe onClick={handleLanguageChange} className={"icon"}/></li>
};

export default GlobeItem;