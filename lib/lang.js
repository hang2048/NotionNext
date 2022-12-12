import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'
import zhHK from './lang/zh-HK'
import zhTW from './lang/zh-TW'
import frFR from '@/lib/lang/fr-FR'
import { getQueryVariable, isBrowser, mergeDeep } from './utils'

const lang = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'zh-HK': zhHK,
  'zh-TW': zhTW,
  'fr-FR': frFR
}

en: {
    NAV: {
      INDEX: 'Blog',
      RSS: 'Subscribe',
      SEARCH: 'Search',
      ABOUT: 'About',
      FRIEND: 'Friends',
      变量名字(英语): '显示在网页里的导航名字'
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next'
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top'
    }
  },
  'zh-CN': {
    NAV: {
      INDEX: '博客',
      RSS: '订阅',
      SEARCH: '搜索',
      ABOUT: '关于',
      FRIEND: '友链',
      变量名字(英语): '显示在网页里的导航名字'
    },
    PAGINATION: {
      PREV: '上一页',
      NEXT: '下一页'
    },
    POST: {
      BACK: '返回',
      TOP: '回到顶部'
    }
  },
  'zh-HK': {
    NAV: {
      INDEX: '網誌',
      RSS: '訂閱',
      SEARCH: '搜尋',
      ABOUT: '關於',
      FRIEND: '友链',
      变量名字(英语): '显示在网页里的导航名字'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    }
  },
  'zh-TW': {
    NAV: {
      INDEX: '部落格',
      RSS: '訂閱',
      SEARCH: '搜尋',
      ABOUT: '關於',
      FRIEND: '友链',
      变量名字(英语): '显示在网页里的导航名字'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    }
  },
  ja: {
    NAV: {
      INDEX: 'ブログ',
      RSS: '購読',
      SEARCH: '検索',
      ABOUT: 'このサイトについて',
      FRIEND: '友達',
      变量名字(英语): '显示在网页里的导航名字'
    },
    PAGINATION: {
      PREV: '前ページ',
      NEXT: '次ページ'
    },
    POST: {
      BACK: '戻る',
      TOP: 'トップに戻る'
    }
  },
  es: {
    NAV: {
      INDEX: 'Blog',
      RSS: 'RSS',
      SEARCH: 'Buscar',
      ABOUT: 'Acerca de mí',
      FRIEND: 'friend',
      变量名字(英语): '显示在网页里的导航名字'
    },
    PAGINATION: {
      PREV: 'Anterior',
      NEXT: 'Siguiente'
    },
    POST: {
      BACK: 'Atrás',
      TOP: 'Arriba'
    }
  }


export default lang

/**
 * 获取当前语言字典
 * @returns 不同语言对应字典
 */
export function generateLocaleDict(langString) {
  let userLocale = lang['en-US']

  switch (langString.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      userLocale = lang['zh-CN']
      break
    case 'zh-hk':
      userLocale = lang['zh-HK']
      break
    case 'zh-tw':
      userLocale = lang['zh-TW']
      break
    case 'fr-fr':
      userLocale = lang['fr-FR']
      break
    default:
      userLocale = lang['en-US']
  }
  return mergeDeep({}, lang['en-US'], userLocale)
}

/**
 * 初始化语言
 * 根据用户当前浏览器语言进行切换
 */
export function initLocale(locale, changeLocale) {
  if (isBrowser()) {
    const browserLocale = window.navigator.language
    const queryLocale = getQueryVariable('lang')
    const targetLocale = generateLocaleDict(queryLocale || browserLocale)
    if (JSON.stringify(locale) !== JSON.stringify(targetLocale)) {
      changeLocale(targetLocale)
    }
  }
}
