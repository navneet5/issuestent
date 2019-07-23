import { css } from '@emotion/core'

export const globalStyles = css({
  '*': {
    boxSizing: 'border-box',
  },
  'html, #root': {
    height: '100%',
    margin: 0,
  },
  'body': {
    fontSize: 16,
    margin: 0,
  }
})
