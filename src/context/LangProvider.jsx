import { useState } from 'react'
import { LangContext } from './LangContext'
import { t } from '../data/translations'

export default function LangProvider({ children }) {
  const [lang, setLang] = useState('es')

  const toggleLang = () => {
    if (lang === 'es') {
      setLang('en')
    } else {
      setLang('es')
    }
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  )
}