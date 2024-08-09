export const seo = {
  title: 'Chenyme | 博客',
  description:
    '我是 Chenyme，一位来自中国的学生。开发者、学生党、旅行者、旅行者都是我的身份，欢迎光临我的博客，我会在这里分享我的项目和个人经验，快来订阅我吧！',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://blog.chenyme.top/'
      : 'https://blog.chenyme.top/'
  ),
} as const
