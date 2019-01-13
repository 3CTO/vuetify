import { Icons } from '../../src/services/icons'

export interface VuetifyIconService {
  new (options?: VuetifyIconOptions): Icons
}

export interface VuetifyIconOptions {
  iconfont: string
  values?: VuetifyIcons
}

export interface VuetifyIconSets {
  [key: string]: VuetifyIcons
}

export interface VuetifyIcons {
  cancel?: string
  clear?: string
  close?: string
  complete?: string
  delete?: string // delete (e.g. v-chip close)
  success?: string
  info?: string
  warning?: string
  error?: string
  prev?: string
  next?: string
  checkboxOn?: string
  checkboxOff?: string
  checkboxIndeterminate?: string
  delimiter?: string // for carousel
  sort?: string
  expand?: string
  menu?: string
  subgroup?: string
  dropdown?: string
  radioOn?: string
  radioOff?: string
  edit?: string
  ratingEmpty?: string
  ratingFull?: string
  ratingHalf?: string
  loading?: string
}
