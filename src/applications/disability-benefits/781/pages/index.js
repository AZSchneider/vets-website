import {
  uiSchema as informationUISchema,
  schema as informationSchema,
} from './informationPage';

import {
  uiSchema as ptsdTypeUISchema,
  schema as ptsdTypeSchema,
} from './choosePtsdType';

import {
  uiSchema as ptsdChoiceUISchema,
  schema as ptsdChoiceSchema,
} from './ptsdChoice';

import {
  uiSchema as ptsdSecondaryChoiceUISchema,
  schema as ptsdSecondaryChoiceSchema,
} from './ptsdSecondaryChoice';

import {
  uiSchema as ptsd781UISchema,
  schema as ptsd781Schema,
} from './uploadPtsd';

import {
  uiSchema as ptsd781aUISchema,
  schema as ptsd781aSchema,
} from './uploadPtsdSecondary';

export const informationPage = {
  uiSchema: informationUISchema,
  schema: informationSchema,
};

export const ptsdType = {
  uiSchema: ptsdTypeUISchema,
  schema: ptsdTypeSchema,
};

export const ptsdChoice = {
  uiSchema: ptsdChoiceUISchema,
  schema: ptsdChoiceSchema,
};

export const ptsdSecondaryChoice = {
  uiSchema: ptsdSecondaryChoiceUISchema,
  schema: ptsdSecondaryChoiceSchema,
};

export const uploadPtsd = {
  uiSchema: ptsd781UISchema,
  schema: ptsd781Schema,
};

export const uploadPtsdSecondary = {
  uiSchema: ptsd781aUISchema,
  schema: ptsd781aSchema,
};
