import React from 'react';
import Close from '@rsuite/icons/Close';
import IconButton from '../../IconButton';
import { WithAsProps, RsRefForwardingComponent } from '@/internals/types';
import { useClassNames } from '../hooks';
import { useCustom } from '../../CustomProvider';
import { CloseButtonLocale } from '../../locales';

export interface CloseButtonProps extends WithAsProps {
  /** Custom locale */
  locale?: CloseButtonLocale;
}

/**
 * Close button for components such as Message and Notification.
 */
const CloseButton: RsRefForwardingComponent<'button', CloseButtonProps> = React.forwardRef(
  (props: CloseButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      as: Component = 'button',
      classPrefix = 'btn-close',
      className,
      locale: overrideLocale,
      ...rest
    } = props;
    const { getLocale } = useCustom();
    const { withClassPrefix, merge } = useClassNames(classPrefix);
    const { closeLabel } = getLocale('CloseButton', overrideLocale);
    const classes = merge(className, withClassPrefix());

    if (Component === IconButton) {
      return (
        <IconButton
          icon={<Close />}
          ref={ref}
          className={classes}
          aria-label={closeLabel}
          appearance="subtle"
          size="sm"
          {...rest}
        />
      );
    }

    return (
      <Component type="button" ref={ref} className={classes} aria-label={closeLabel} {...rest}>
        <Close />
      </Component>
    );
  }
);

CloseButton.displayName = 'CloseButton';

export default CloseButton;
