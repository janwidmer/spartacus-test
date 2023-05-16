import { Occ } from '@spartacus/core';
import { createLanguage } from '@valantic/spartacus-mock';

// you can use the `languageList` function from our library or create your own
export const languageList = (): Occ.LanguageList => {
  return {
    languages: [
      createLanguage({
        isocode: 'en',
        name: 'English',
        nativeName: 'English',
      }),
      createLanguage({
        isocode: 'de',
        name: 'German',
        nativeName: 'Deutsch',
      }),
      createLanguage({
        isocode: 'xy',
        name: 'Swedish',
        nativeName: 'Svenska',
      }),
    ],
  };
};
