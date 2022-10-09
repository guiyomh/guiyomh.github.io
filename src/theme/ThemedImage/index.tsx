import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useColorMode} from '@docusaurus/theme-common';
import type {Props} from '@theme/ThemedImage';

import styles from './styles.module.css';

export default function ThemedImage(props: Props): JSX.Element {
  const { sources, className, alt, ...propsRest } = props;

  return (
        <img
          src="/img/favicon-32x32.png"
          alt={alt}
          className={clsx(
            styles.themedImage,
            className,
          )}
          {...propsRest}
        />
  );
}
