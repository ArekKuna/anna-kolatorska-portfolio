import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutMeAboutMe extends Schema.Component {
  collectionName: 'components_about_me_about_mes';
  info: {
    displayName: 'aboutMe';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface LayoutLayoutSlider extends Schema.Component {
  collectionName: 'components_layout_layout_sliders';
  info: {
    displayName: 'layoutSlider';
    description: '';
  };
  attributes: {
    imagesArray: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-me.about-me': AboutMeAboutMe;
      'layout.layout-slider': LayoutLayoutSlider;
    }
  }
}
