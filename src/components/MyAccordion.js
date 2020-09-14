import React, { useState } from 'react';
import { Accordion } from '@fluentui/react-northstar';

const pp = [
  {
    key: 'p',
    title: 'What is a point?',
    content:
      'Use the haptic SDD circuit, then you can index the redundant pixel!',
  },
  {
    key: 'd',
    title: 'What is a dimension of a point?',
    content: 'We need to copy the primary USB firewall!',
  },
];

const MyAccordion = ({ panels }) => (
  <Accordion defaultActiveIndex={[0]} panels={panels} />
);

export default MyAccordion;
