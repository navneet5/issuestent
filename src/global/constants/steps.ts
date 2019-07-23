export interface SingleStep {
  order: number
  label: string
}

export const STEPS: SingleStep[] = [
  { order: 1, label: 'Code Check' },
  { order: 2, label: 'Master Key' },
  { order: 3, label: 'Configure' },
  { order: 4, label: 'New Account' },
  { order: 5, label: 'Your Account' },
]
