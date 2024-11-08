import { ReactNode, useState, createContext, FC } from "react"
// Languages
import pt_br from "~/services/language_pt_br"
import en from "~/services/language_en"
import es from "~/services/language_es"

interface LanguageType {
  [key: string]: string
}
const languages: { [key: string]: LanguageType } = { pt_br, en, es }

interface LanguageContextType {
  i18n: (lang: string, key: string) => string
  lang: string
  setLang: (lang: string) => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

interface LanguageProviderProps {
  children: ReactNode
}

const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [lang, setLang] = useState("pt_br")

  const i18n = (lang: string, key: string): string => {
    const language = languages[lang] || languages["pt_br"]
    return language[key] || key
  }

  return (
    <LanguageContext.Provider value={{ i18n, lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
