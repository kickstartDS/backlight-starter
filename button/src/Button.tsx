import * as React from 'react';
import { Button as KDSButton, ButtonProps } from '@kickstartds/base/lib/button';

export const Button = ({ variant = 'solid', ...rest }: ButtonProps) => (
  <KDSButton variant={variant} {...rest} />
);
