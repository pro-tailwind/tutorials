import type { Tag } from '~/types'

export type { Tag }

const tagClasses: Record<Tag, string> = {
  intro: 'bg-green-100 text-green-700',
  outro: 'bg-green-100 text-green-700',
  'show & tell': 'bg-cyan-100 text-cyan-700',
  challenge: 'bg-yellow-100 text-yellow-700',
  solution: 'bg-purple-100 text-purple-700',
  bonus: 'bg-cyan-100 text-cyan-700',
}

export const getTagClasses = (tag: Tag) => tagClasses[tag]
