// This file is auto-generated by generate-locale.ts

export const interpolateTemplate = (text: string, data: Record<string, string>): string => {
    let theText = text
  
    theText = theText.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
      return key in data ? data[key] : match
    })
  
    return theText
  }
export type SupportedLanguage = 'en';
  export const defaultLanguage: SupportedLanguage = 'en';
  
export const enHello = "Hello world!"
export const enGreeting = "Hello {name}!"
export const enHome = "Home"
export const hello = (lang: SupportedLanguage) => {
      switch (lang) {
    case 'en': return enHello;
        default:
            return enHello
        }
    }
export const greeting = (lang: SupportedLanguage) => {
      switch (lang) {
    case 'en': return enGreeting;
        default:
            return enGreeting
        }
    }
export const home = (lang: SupportedLanguage) => {
      switch (lang) {
    case 'en': return enHome;
        default:
            return enHome
        }
    }
export type StringKeys = 'hello' | 'greeting' | 'home'