import { useContext } from 'react'
import { LangContext } from './LangContext'

export function useLang() {
  const context = useContext(LangContext)
  return context
}