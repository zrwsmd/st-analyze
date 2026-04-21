# PLC/ST 开发说明

## 构建方式

### 开发/测试环境

用于本地联调、断点调试语言服务器和扩展：

```bash
yarn workspace st-plugin build:debug
```

这条命令会：

- 生成 source map
- 保留便于调试的构建产物
- 允许在 VS Code 里对 `src/plc/langium-server/src/*.ts` 直接打断点

### 生产/交付环境

用于日常构建、交付和打包：

```bash
yarn workspace st-plugin build
```

这条命令会：

- 生成正常发布产物
- 不保留 `.map` 文件
- 自动清理之前 debug 构建残留的 `.map`

根目录执行：

```bash
yarn build
```

也走生产构建逻辑，不会保留 `.map` 文件。

## 调试说明

如果需要在测试环境调试补全、校验、作用域等语言服务逻辑：

1. 先执行 `yarn workspace st-plugin build:debug`
2. 在 VS Code 中选择 `ST Extension + Language Server`
3. 按 `F5`
4. 在 `.st` 文件中触发对应行为，例如输入 `g.`
5. 断点可以直接下在语言服务器源码里，例如：
   - `src/plc/langium-server/src/cache-complete.ts`
   - `src/plc/langium-server/src/st-scope.ts`
   - `src/plc/langium-server/src/infer.ts`
   - `src/plc/langium-server/src/st-linker.ts`

## 关于 `.map`

- 只有 `build:debug` 会生成 `.map`
- 普通 `build` 不会保留 `.map`
- 打包时 `.vscodeignore` 已排除 `dist/**/*.map`
