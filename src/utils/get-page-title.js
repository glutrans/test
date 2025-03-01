import defaultSettings from '@/settings'

const title = defaultSettings.title || '全球昌运集团'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
