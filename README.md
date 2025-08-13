# Professional Portfolio - React TypeScript Template

A modern, responsive personal portfolio template built with React, TypeScript, and Vite. Perfect for showcasing professional work, skills, and experience with smooth animations and clean design.

## 项目类型

**Personal Portfolio** - A professional portfolio website template designed for developers, designers, and creative professionals.

## 主要功能特性

- ✨ **Modern TypeScript** - Built with React 18+ and TypeScript for type safety
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎭 **Smooth Animations** - Beautiful animations with Framer Motion
- 💼 **Professional Sections** - Hero, About, Portfolio, Services, Resume, Testimonials
- 📊 **Interactive Elements** - CountUp animations, skill progress bars
- 📝 **Blog Support** - Built-in blog pages with routing
- 📞 **Contact Form** - Working contact form with validation
- 🎨 **Modern UI/UX** - Clean, professional design with Bootstrap 5
- ⚡ **Fast Performance** - Optimized build with Vite
- 🔗 **Client Routing** - React Router for smooth navigation

## 技术栈

- **前端框架**: React 18+ with TypeScript
- **构建工具**: Vite
- **样式方案**: Bootstrap 5 + Custom CSS
- **动画**: Framer Motion
- **路由**: React Router Dom
- **图标**: Font Awesome
- **轮播**: Swiper.js
- **滚动**: React Scroll
- **计数器**: React CountUp
- **数据库**: Supabase (预配置)
- **类型检查**: TypeScript with ESLint

## 项目结构

```
├── src/
│   ├── components/           # 组件目录
│   │   ├── sections/         # 页面区块组件
│   │   │   ├── hero.tsx      # 首页横幅
│   │   │   ├── about.tsx     # 关于我们
│   │   │   ├── portfolio.tsx # 作品展示
│   │   │   ├── services.tsx  # 服务介绍
│   │   │   ├── resume.tsx    # 简历/经历
│   │   │   ├── skills.tsx    # 技能展示
│   │   │   ├── pricing.tsx   # 价格方案
│   │   │   ├── testimonilas.tsx # 客户评价
│   │   │   ├── clients.tsx   # 客户展示
│   │   │   ├── contact.tsx   # 联系方式
│   │   │   └── blog/         # 博客相关
│   │   │       ├── index.tsx
│   │   │       ├── blogArticle.tsx
│   │   │       ├── blogSidebar.tsx
│   │   │       ├── comments.tsx
│   │   │       └── pageHeader.tsx
│   │   └── ui/               # UI组件
│   │       ├── loading.tsx   # 加载组件
│   │       └── sectionTitle.tsx # 标题组件
│   ├── layout/               # 布局组件
│   │   ├── header.tsx        # 页面头部
│   │   ├── footer.tsx        # 页面底部
│   │   └── layout.tsx        # 主布局
│   ├── pages/                # 页面组件
│   │   ├── home.tsx          # 首页
│   │   └── blog-single.tsx   # 博客详情页
│   ├── router/               # 路由配置
│   │   └── router.tsx        # 路由设置
│   ├── utils/                # 工具函数
│   │   ├── animations/       # 动画组件
│   │   │   ├── slideUp.tsx   # 上滑动画
│   │   │   └── zoomIn.tsx    # 缩放动画
│   │   └── fackData/         # 模拟数据
│   │       ├── blogData.ts
│   │       ├── clientLogoData.ts
│   │       ├── menuList.ts
│   │       ├── portfolioData.ts
│   │       ├── priceData.ts
│   │       ├── resumeData.ts
│   │       ├── servicesData.ts
│   │       ├── skillsData.ts
│   │       └── testimonilasData.ts
│   ├── assets/               # 静态资源
│   │   ├── css/              # 样式文件
│   │   └── fonts/            # 字体文件
│   ├── integrations/         # 第三方集成
│   │   └── supabase/         # Supabase配置
│   └── App.tsx               # 根组件
├── public/                   # 公共资源
│   └── images/              # 图片资源
├── index.html                # HTML模板
├── vite.config.ts            # Vite配置
├── tsconfig.json             # TypeScript配置
└── package.json              # 项目依赖
```

## 页面功能

### 🏠 **首页 (Hero)**
- 个人介绍和职业标签
- 动态计数器显示经验数据
- 吸引眼球的动画效果
- 专业技能展示

### 👤 **关于我 (About)**
- 个人简介和专业背景
- 技能列表展示
- 可用状态指示器
- 专业经历介绍

### 💼 **作品集 (Portfolio)**
- 项目展示和案例研究
- 图片画廊效果
- 项目详细描述
- 分类展示功能

### 🛠️ **服务 (Services)**
- 提供的专业服务
- 服务特色和优势
- 图标化展示

### 📄 **简历 (Resume)**
- 工作经历时间轴
- 教育背景展示
- 专业技能进度条

### 🎯 **技能 (Skills)**
- 技术能力展示
- 可视化技能等级
- 专业工具介绍

### 💰 **定价 (Pricing)**
- 服务套餐和价格
- 功能对比表格
- 推荐方案标识

### 💬 **客户评价 (Testimonials)**
- 客户反馈和推荐
- 轮播展示效果
- 客户头像和评分

### 🏢 **客户展示 (Clients)**
- 合作客户Logo
- 信任度展示

### 📝 **博客 (Blog)**
- 文章列表和详情
- 博客侧边栏
- 评论系统
- 文章分类和标签

### 📞 **联系我们 (Contact)**
- 多种联系方式
- 联系表单
- 地理位置信息
- 社交媒体链接

## 安装和使用

### 环境要求

- Node.js 16+
- npm 或 pnpm
- TypeScript支持的编辑器

### 安装步骤

```bash
# 安装依赖
npm install
# 或
pnpm install

# 启动开发服务器
npm run dev
# 或
pnpm run dev

# 构建生产版本
npm run build
# 或
pnpm run build

# 预览构建结果
npm run preview
# 或
pnpm run preview

# 代码检查
npm run lint
# 或
pnpm run lint
```

## 配置说明

### Supabase 集成

项目已预配置 Supabase 支持，如需使用请：

1. 在 `.env` 文件中添加环境变量：
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. 根据需求修改 `src/integrations/supabase/types.ts` 中的数据库类型定义

### 自定义配置

- **样式定制**: 修改 `src/assets/css/` 中的CSS文件
- **内容更新**: 修改 `src/utils/fackData/` 中的数据文件
- **路由配置**: 修改 `src/router/router.tsx` 添加新页面
- **组件定制**: 根据需求修改 `src/components/` 中的组件

### TypeScript 配置

项目使用严格的 TypeScript 配置：
- `tsconfig.json` - 应用配置
- `tsconfig.app.json` - 应用特定配置
- `tsconfig.node.json` - Node.js配置

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 特色功能

- 🎨 **响应式设计** - 完美适配各种设备
- ⚡ **快速加载** - Vite优化构建和热更新
- 🔍 **SEO优化** - 良好的搜索引擎优化
- 🎭 **动画效果** - Framer Motion丰富交互
- 📱 **移动友好** - 移动端优先设计
- 🛠️ **易于定制** - TypeScript类型安全
- 🔧 **现代工具链** - ESLint, Prettier集成

## 开发指南

### 添加新页面

1. 在 `src/pages/` 创建新的页面组件
2. 在 `src/router/router.tsx` 添加路由配置
3. 在导航菜单中添加链接

### 修改数据

- 修改 `src/utils/fackData/` 中的相应数据文件
- 数据文件包含所有页面的内容和配置

### 添加新组件

1. 在 `src/components/` 相应目录下创建组件
2. 使用 TypeScript 类型定义
3. 导入并在页面中使用

## 注意事项

- 确保所有必要的依赖都已正确安装
- 开发时请使用支持 TypeScript 的编辑器
- 生产部署前请运行类型检查和构建测试
- 定期更新依赖包以确保安全性

## 技术支持

如遇到问题，请检查：
1. Node.js 版本是否满足要求
2. TypeScript 编译是否有错误
3. 依赖包是否完全安装
4. 环境变量是否正确配置