import React from 'react';
import FormApp from 'us-forms-system/lib/containers/FormApp';
// import FormApp from '../common/schemaform/containers/FormApp';
import formConfig from './config/form';

export default function HealthCareEntry({ location, children }) {
  return (
    <FormApp formConfig={formConfig} currentLocation={location}>
      {children}
    </FormApp>
  );
}
