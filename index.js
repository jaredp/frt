import React from 'react';

const frt_variable_name = "__frt_hook__";
const frt_hooks = window[frt_variable_name] || {};

export const useFRTAction = frt_hooks.useFRTAction || function() {};
export const useFRTActionMulti = frt_hooks.useFRTActionMulti || function() {};
export const SkipFRT = frt_hooks.SkipFRT || React.Fragment;
export const frtPatchComponent = frt_hooks.frtPatchComponent || function() {};


/*** exploration utils ***/

export function pick_random(opts) {
  if (opts.length === 0) {
    throw new Error("no options to choose from");
  }
  return opts[Math.floor(Math.random() * opts.length)];
}

export function useFRTActionIf(condition, action) {
  useFRTActionMulti(!condition ? [] : [action]);
}
