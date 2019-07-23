import React from 'react'
import styled from '@emotion/styled'

interface Props {
  value?: number
  className?: string
}

export const LinearProgress: React.FC<Props> = ({
  value = 0,
  className,
}) => (
  <BackgroundBar className={className}>
    <InnerBar value={value} />
  </BackgroundBar>
)

const BackgroundBar = styled.div({
  backgroundColor: 'lightgray',
  height: 15,
  width: '100%',
  borderRadius: 8,
})

const InnerBar = styled.div<Props>(({ value }) => ({
  background: 'red',
  height: '100%',
  width: `${value}%`,
}))
