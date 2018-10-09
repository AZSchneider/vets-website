import React from 'react';
import { omit, set } from 'lodash';
import fullSchema from '../21-0781-schema.json';

import {
  schema as addressSchema,
  uiSchema as addressUiSchema,
} from '../../../../platform/forms/definitions/address';

// const _ = require('lodash');

const eventLocationTitle = () => (
  <legend className="schemaform-block-title schemaform-title-underline">
    PTSD: Event Location
  </legend>
);

// const eventLocationDescription = () => (
//   <p>
//     Where did the event happen? Please be as specific as you can and include the
//     name of the city, state, country, province, landmark, or military
//     installation.
//   </p>
// );

const addressUi = {
  ...set(
    omit(addressUiSchema(), ['street', 'street2', 'street3', 'postalCode']),
    'location',
    {
      'ui:title': 'Location',
    },
  ),
  'ui:order': ['country', 'state', 'city', 'location'],
};

export const uiSchema = {
  'ui:title': eventLocationTitle,
  'view:incidentLocation': {
    addressUi,
  },
};

const address = {
  ...set(
    omit(addressSchema(fullSchema, false), [
      'properties.postalCode',
      'properties.street',
      'properties.street2',
    ]),
    'properties.location',
    {
      type: 'string',
    },
  ),
};

export const schema = {
  type: 'object',
  properties: {
    'view:incidentLocation': address,
  },
};
