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
  
import { ComponentProps } from 'react';
import DedIndexMarkdown from '../ded/index.mdx';
import EnIndexMarkdown from '../en/index.mdx';
const DedIndex = (props: ComponentProps<typeof DedIndexMarkdown>) => <DedIndexMarkdown {...props} />;
const EnIndex = (props: ComponentProps<typeof EnIndexMarkdown>) => <EnIndexMarkdown {...props} />;
export const Index = (props: {lang: SupportedLanguage } & ComponentProps<typeof EnIndex>) => {
  const { lang, ...rest } = props
  switch (lang) {
    case 'en':
      return <EnIndex {...rest} />;
    default:
      return <EnIndex {...rest} />
  }
}