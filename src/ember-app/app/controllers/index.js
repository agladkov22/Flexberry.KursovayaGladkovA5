import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.title'),
          children: [{
            link: 'i-i-s-kursovaya-gladkov-a-клиенты-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-клиенты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-a-оборудование-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-оборудование-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-оборудование-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-a-склады-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-склады-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-склады-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-a-тех-карта-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-тех-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-тех-карта-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-a-заявки-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-заявки-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-заявки-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-a-чертеж-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-чертеж-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-чертеж-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-kursovaya-gladkov-a-материалы-l',
            caption: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya-gladkov-a.i-i-s-kursovaya-gladkov-a-материалы-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})