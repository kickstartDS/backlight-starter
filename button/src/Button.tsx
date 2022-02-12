import * as React from 'react';
import { Button as KDSButton, ButtonProps } from '@kickstartds/base/lib/button';

/**
  The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
*/
export const Button = ({
  label = 'Lorem',
  variant = 'solid',
  ...rest
}: ButtonProps) => <KDSButton label={label} variant={variant} {...rest} />;
