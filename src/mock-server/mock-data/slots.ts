import { Occ } from '@spartacus/core';
import { cmsParagraphComponent } from '@valantic/spartacus-mock';

export const testSlot = (): Occ.ContentSlot => {
  return {
    slotId: 'siteLogoSlot2',
    slotUuid: 'testSlot1234',
    position: 'SiteLogo',
    name: 'My Test Slot',
    slotShared: true,
    components: {
      component: [
        cmsParagraphComponent('Hello World!')
      ],
    },
  };
};
