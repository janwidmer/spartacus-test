import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MockConfig } from '@valantic/spartacus-mock';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { contentPages } from './mock-server/mock-data/pages';
import { handlers } from './mock-server/handlers';
import { testSlot } from './mock-server/mock-data/slots';

if (environment.production) {
  enableProdMode();
}

async function prepare(): Promise<ServiceWorkerRegistration | undefined> {
  if (environment.mockServer) {
    const { prepareMock } = await import(/* webpackChunkName: "mock-server" */ '@valantic/spartacus-mock');

    const mockConfig: MockConfig = {
      enableWorker: environment.mockServer || false,
      environment,
      handlers,
      contentPages: contentPages(),
      customSlots: [testSlot()],
    };

    return prepareMock(mockConfig);
  }
  return Promise.resolve(undefined);
}

function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

if (document.readyState === 'complete') {
  prepare().then(() => bootstrap());
} else {
  document.addEventListener('DOMContentLoaded', () => prepare().then(() => bootstrap()));
}
