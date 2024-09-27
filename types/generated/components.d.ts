import type { Schema, Attribute } from '@strapi/strapi';

export interface GenericGenericContent extends Schema.Component {
  collectionName: 'components_generic_generic_contents';
  info: {
    displayName: 'Generic Content';
    icon: 'stack';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.RichText;
    Content: Attribute.RichText;
    Reversed: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'generic.generic-content': GenericGenericContent;
    }
  }
}
