import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MockConfig, prepareMock } from '@valantic/spartacus-mock/dist/spartacus-mock';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
}

const mockConfig: MockConfig = {
  enableWorker: environment.mockServer || false,
  environment,
}

if (document.readyState === 'complete') {
  prepareMock(mockConfig).then(() => bootstrap());
} else {
  document.addEventListener(
    'DOMContentLoaded',
    () => prepareMock(mockConfig).then(() => bootstrap())
  );
}
