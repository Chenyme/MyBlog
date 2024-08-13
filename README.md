## Chenyme | 博客

Chenyme 的个人博客网站 [blog.chenyme.top](https://blog.chenyme.top/) 的源码。二开改自：[Cali](https://github.com/CaliCastle/cali.so)

### 新增支持

- LaTex
- Table
- 视频嵌入
- 图片直链

### 技术栈

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [Clerk](https://clerk.com/)
- [Neon](https://neon.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Sanity](https://www.sanity.io/)
- [React Email](https://react.email)
- [Resend](https://resend.com/)

需要其他服务商的环境变量才能正常运行，所以如果你想要在本地运行，需要自己配置。

可查看 `.env.example` 文件，里面包含了所有需要的环境变量。

### 本地开发

```bash
pnpm install  # 安装依赖

pnpm dev  # 启动开发服务器

pnpm build  # 构建
```

推荐通过 [Vercel](https://vercel.com/) 一键部署。
