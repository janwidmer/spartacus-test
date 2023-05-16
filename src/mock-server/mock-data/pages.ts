import {
  PageFactoryService,
  Pages,
  contentSlot,
  cmsParagraphComponent
} from '@valantic/spartacus-mock';

export const contentPages = (): Pages => {
  const pageFactoryService = new PageFactoryService([]);

  return {
    'hello-world': pageFactoryService.createContentPage(
      'helloWorld',
      'Hello World',
      [
        contentSlot('Section2A', [
          cmsParagraphComponent('Hello World!')]
        ),
      ]
    ),
  };
};
