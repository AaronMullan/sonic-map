import React from 'react';
import BarGroup from './shapes/BarGroup';

export type BarGroupProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};
const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };

export default function TwitterBar({
  width,
  height,
  events = false,
  margin = defaultMargin,
}: BarGroupProps){

  return(
    <h1>hullo world </h1>
  )
}
