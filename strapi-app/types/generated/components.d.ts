import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutLayoutSlider extends Schema.Component {
  collectionName: 'components_layout_layout_sliders';
  info: {
    displayName: 'layoutSlider';
    description: '';
  };
  attributes: {
    imagesArray: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.layout-slider': LayoutLayoutSlider;
    }
  }
}
