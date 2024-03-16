import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHomeSlider extends Schema.Component {
  collectionName: 'components_components_home_sliders';
  info: {
    displayName: 'homeSlider';
  };
  attributes: {
    homeSlider: Attribute.Media;
  };
}

export interface ComponentsOptions extends Schema.Component {
  collectionName: 'components_components_options';
  info: {
    displayName: 'Option';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    list: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface ComponentsSessionPage extends Schema.Component {
  collectionName: 'components_blocks_session_pages';
  info: {
    displayName: 'textWithImageBox';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    imagePositionLeft: Attribute.Boolean & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    backgroundColor: Attribute.Boolean & Attribute.Required;
    marginTop: Attribute.Boolean & Attribute.Required;
  };
}

export interface ComponentsTextWithMultipleImagesBox extends Schema.Component {
  collectionName: 'components_components_text_with_multiple_images_boxes';
  info: {
    displayName: 'textWithMultipleImagesBox';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    images: Attribute.Media & Attribute.Required;
    imagePositionLeft: Attribute.Boolean & Attribute.Required;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    backgroundColor: Attribute.Boolean & Attribute.Required;
    marginTop: Attribute.Boolean & Attribute.Required;
  };
}

export interface TemplatesSessionTemplate extends Schema.Component {
  collectionName: 'components_templates_session_templates';
  info: {
    displayName: 'sessionTemplate';
    description: '';
  };
  attributes: {
    textWithImageBox: Attribute.Component<'components.session-page'> &
      Attribute.Required;
    textWithImageBox2: Attribute.Component<'components.session-page'> &
      Attribute.Required;
    textWithMultipleImages: Attribute.Component<'components.text-with-multiple-images-box'> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.home-slider': ComponentsHomeSlider;
      'components.options': ComponentsOptions;
      'components.session-page': ComponentsSessionPage;
      'components.text-with-multiple-images-box': ComponentsTextWithMultipleImagesBox;
      'templates.session-template': TemplatesSessionTemplate;
    }
  }
}
