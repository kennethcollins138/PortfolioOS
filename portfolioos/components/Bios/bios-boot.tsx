"use client"

import { useRouter } from 'next/navigation'
import React from 'react';

import TextLoading from '../text-loading';
import styles from './BIOSStyles.module.css';

const biosMessages = [
  'Welcome to my Portfolio!',
  'Initializing Components...',
  'Loading User Interface...',
  'Applying Themes...',
  'Finalizing Setup...',
  'Launch Complete.'
];

/** handleComplete will route user to their respective path
 * which is dependent on the system they are viewing from.
 */

const BIOSBoot: React.FC = () => {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/linux');
  };
  return (
    <TextLoading
      className={styles.biosContainer}
      delay={1000}
      messages={biosMessages}
      onComplete={handleComplete}
    />
  );
};

export default BIOSBoot;
