"use client"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export function Progressbar() {
    return  <ProgressBar
    height="4px"
    color="hsl(var(--primary))"
    options={{ showSpinner: false }}
    shallowRouting
  />
}