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

// console.log(addressUI);

export const uiSchema = {
  'ui:title': PtsdNameTitle,
  'ui:description': ptsdLocationDescription,
  incidentLocation: {
    ...addressUI,
    // additionalDetails: {
    //   'ui:title': 'Additional details', // Currently only on 781a, keeping here for now.
    //   'ui:widget': 'textarea',
    // },
    // 'ui:order': [...omit(addressUI, ['[ui:order].additionalDetails'])],
  },
};

export const schema = {
  type: 'object',
  properties: {
    incidentLocation: {
      ...addressSchema,
      properties: {
        ...addressSchema.properties,
        // additionalDetails: {
        //   type: 'string',
        // },
      },
    },
  },
};
