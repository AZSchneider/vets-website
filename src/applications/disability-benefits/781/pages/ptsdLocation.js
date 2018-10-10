import React from 'react';
import { locationSchemas } from '../helpers';

const PtsdNameTitle = () => (
  <legend className="schemaform-block-title schemaform-title-underline">
    PTSD: Event Location
  </legend>
);

const ptsdLocationDescription = () => (
  <p>
    Where did the event happen? Please be as specific as you can and include the
    name of the city, state, country, province, landmark, or military
    installation.
  </p>
);

const { addressUI, addressSchema } = locationSchemas();

export const uiSchema = {
  'ui:title': PtsdNameTitle,
  'ui:description': ptsdLocationDescription,
  incidentLocation: addressUI,
};

export const schema = {
  type: 'object',
  properties: {
    incidentLocation: {
      ...addressSchema,
      properties: addressSchema.properties,
    },
  },
};
