import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { CheckoutConfig } from '@spartacus/checkout/base/root';
import { AuthConfig, FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import { defaultCmsContentProviders, layoutConfig, mediaConfig, ViewConfig } from '@spartacus/storefront';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ...defaultCmsContentProviders,
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          prefix: environment.backend.occ.prefix,
          baseUrl: environment.backend.occ.baseUrl,
        }
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {},
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '5.2'
      }
    }),
    provideConfig(<CheckoutConfig>{
      checkout: {
        guest: true
      }
    }),
    provideConfig(<AuthConfig>{
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret',
      },
    }),
    provideConfig(<ViewConfig>{
      view: {
        infiniteScroll: true
      }
    })
  ]
})
export class SpartacusConfigurationModule {}
