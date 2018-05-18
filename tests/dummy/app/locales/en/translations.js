import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';
import EmberFlexberryGisTranslations from 'ember-flexberry-gis/locales/en/translations';
import EmberFlexberryGisCswTranslations from 'ember-flexberry-gis-csw/locales/en/translations';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations, EmberFlexberryGisTranslations, EmberFlexberryGisCswTranslations);

Ember.$.extend(true, translations, {
  'application-name': 'Test stand for ember-flexberry-gis-csw',

  'forms': {
    'loading': {
      'spinner-caption': 'Loading data, please wait...'
    },
    'index': {
      'greeting': 'Welcome to ember-flexberry-gis-csw test stand!'
    },

    'application': {
      'header': {
        'menu': {
          'sitemap-button': {
            'caption': '',
            'title': 'Menu'
          },
          'user-settings-service-checkbox': {
            'caption': 'Use user settings service'
          },
          'show-menu': {
            'caption': 'Show menu'
          },
          'hide-menu': {
            'caption': 'Hide menu'
          },
          'language-dropdown': {
            'caption': 'Application language',
            'placeholder': 'Choose language'
          }
        }
      },

      'footer': {
        'application-name': 'Test stand for ember-flexberry-gis-csw',
        'application-version': {
          'caption': 'Addon version {{version}}',
          'title': 'It is version of ember-flexberry-gis-csw addon, which uses in this dummy application ' +
            '(npm version + commit sha). ' +
            'Click to open commit on GitHub.'
        }
      },

      'sitemap': {
        'application-name': {
          'caption': 'Test stand for ember-flexberry-gis-csw',
          'title': ''
        },
        'application-version': {
          'caption': 'Addon version {{version}}',
          'title': 'It is version of ember-flexberry-gis addon, which uses in this dummy application ' +
            '(npm version + commit sha). ' +
            'Click to open commit on GitHub.'
        },
        'index': {
          'caption': 'Home',
          'title': ''
        },
        'gis': {
          'caption': 'GIS',
          'title': '',
          'map': {
            'caption': 'Map',
            'title': ''
          }
        }
      }
    },

    'map': {
      'caption': 'Map'
    }
  }
});

export default translations;
