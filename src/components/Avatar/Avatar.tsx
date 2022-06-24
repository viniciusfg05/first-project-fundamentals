import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvataProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props}: AvataProps) {
  return (
    <>
      <img
        className={hasBorder ? styles.avatar : styles.avatarHasBorder}
        {...props}
      />
    </>
  )
}
