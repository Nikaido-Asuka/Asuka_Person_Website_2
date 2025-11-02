module.exports = {
  i18n: {
    defaultLocale: 'zh',      // 默认语言
    locales: ['zh', 'en'],    // 支持的语言列表
  },
  react: { useSuspense: false } // 推荐关闭 suspense，避免 SSR 问题
};
