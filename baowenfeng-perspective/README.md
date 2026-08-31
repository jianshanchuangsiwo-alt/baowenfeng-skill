# baowenfeng-perspective

一个可安装、可发布到 npm、也可直接放进 GitHub 开源仓库的 Node.js prompt/skill 包。

> **重要说明**
>
> 这个包本身不是 AI 模型，也不会自动连接 ChatGPT、Claude、Gemini 或其他模型 API。
> 它提供的是可复用的 `SKILL.md` 和 JavaScript API：你可以把生成的 prompt 交给自己的 AI 应用。
>
> `SKILL.md` 的内容来自用户提供的原始 Markdown 文件。由于内容涉及现实中的在世个人，公开发布前请确认你拥有使用、公开和传播其中人物信息/素材的相应权利，并避免把生成内容误称为该人士本人真实发言。

## 安装

发布到 npm 后：

```bash
npm install baowenfeng-perspective
```

全局安装 CLI：

```bash
npm install -g baowenfeng-perspective
```

## JavaScript 使用

```js
import { getSkill, getPrompt, metadata } from "baowenfeng-perspective";

console.log(metadata);
console.log(getSkill());

const systemPrompt = getPrompt();
console.log(systemPrompt);
```

## CLI

打印完整 prompt：

```bash
npx baowenfeng-perspective
```

查看帮助：

```bash
npx baowenfeng-perspective --help
```

查看元数据：

```bash
npx baowenfeng-perspective --json
```

## 本地测试

```bash
npm install
npm test
npm run check
```

## 发布 npm

先登录 npm：

```bash
npm login
```

检查包内容：

```bash
npm pack --dry-run
```

正式发布：

```bash
npm publish
```

如果 npm 提示包名已经被占用，需要把 `package.json` 里的 `name` 改成一个可用名称。

## GitHub 开源

建议仓库结构：

```text
baowenfeng-perspective/
├─ src/
│  ├─ index.js
│  └─ cli.js
├─ test/
│  └─ basic.test.js
├─ SKILL.md
├─ README.md
├─ LICENSE
├─ package.json
└─ .gitignore
```

然后：

```bash
git init
git add .
git commit -m "Initial release"
git branch -M main
git remote add origin <你的GitHub仓库地址>
git push -u origin main
```

## 与 AI 应用集成

这个包只负责提供 prompt。你的 AI 应用可以：

1. `import { getPrompt } from "baowenfeng-perspective"`
2. 把 `getPrompt()` 作为系统提示词/开发者提示词的一部分
3. 再把用户问题交给你所使用的模型 API

具体 API 写法取决于你使用的 AI 服务，本项目不绑定任何厂商。

## 版本

当前版本：`1.0.0`

## License

项目代码采用 MIT License。`SKILL.md` 中的现实人物资料/用户提供素材是否可以公开传播，不由 MIT License 自动解决；公开发布前请自行确认相关权利和授权情况。
