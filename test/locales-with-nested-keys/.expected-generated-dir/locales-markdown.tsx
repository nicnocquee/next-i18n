// This file is auto-generated by generate-locale.ts

export const interpolateTemplate = (text: string, data: Record<string, string>): string => {
    let theText = text
  
    theText = theText.replace(/{{\s*(\w+)\s*}}/g, (match, key) => {
      return key in data ? data[key] : match
    })
  
    return theText
  }
export type SupportedLanguage = 'de' | 'en';
export const defaultLanguage: SupportedLanguage = 'en';
export const supportedLanguages: SupportedLanguage[] = ['de', 'en'];
  
import { ComponentProps } from 'react';
import DeIndexMarkdown from '../de/index.mdx';
import EnIndexMarkdown from '../en/index.mdx';
const DeIndex = (props: ComponentProps<typeof DeIndexMarkdown>) => <DeIndexMarkdown {...props} />;
const EnIndex = (props: ComponentProps<typeof EnIndexMarkdown>) => <EnIndexMarkdown {...props} />;
export const Index = (props: {lang: SupportedLanguage } & ComponentProps<typeof EnIndex>) => {
  const { lang, ...rest } = props
  switch (lang) {
    case 'de':
      return <DeIndex {...rest} />;
    case 'en':
      return <EnIndex {...rest} />;
    default:
      return <EnIndex {...rest} />
  }
}
