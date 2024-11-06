import { useContext } from "react"
import { LanguageContext } from "~/contexts/languages"

const useLanguage = () => {
  const context = useContext(LanguageContext)

  return context
}

export default useLanguage
