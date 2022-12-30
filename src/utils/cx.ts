type Type = (...classes: string[]) => string

export const cx: Type = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}
