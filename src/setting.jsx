/////////// IMPORTS
///
//import styles from './Settings.module.css'
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useIsRTL } from "./hooks/useIsRTL"
///
/////////// Types
///

/////////// HELPER VARIABLES & FUNCTIONS
///

///
export const Settings = ({ title }) => {
  /////////// VARIABLES
  ///

  ///
  /////////// CUSTOM HOOKS
  ///
  const isRTL = useIsRTL()
  ///
  /////////// STATES
  ///

  ///
  /////////// SIDE EFFECTS
  ///
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = isRTL ? "ar" : "en"
  }, [isRTL])
  ///
  /////////// IF CASES
  ///

  ///
  /////////// EVENTS
  ///

  ///
  /////////// FUNCTIONS
  ///
  const toggleLang = () => {
    i18n.changeLanguage(isRTL ? "en" : "ar")
  }
  ///
  return (
    <>
      <button onClick={toggleLang} className="border-0 bg-transparent text-white">
        EN{" "}
      </button>
    </>
  )
}
