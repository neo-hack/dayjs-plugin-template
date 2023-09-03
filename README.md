# @aiou/dayjs-plugin-template
*build dayjs plugin lib*

[![npm](https://img.shields.io/npm/v/@aiou/dayjs-plugin-template)](https://github.com/neo-hack/dayjs-plugin-template/tree/master) [![GitHub](https://img.shields.io/npm/l/@aiou/dayjs-plugin-template)](https://github.com/neo-hack/dayjs-plugin-template/tree/master) [![stackblitz](https://img.shields.io/badge/%E2%9A%A1%EF%B8%8Fstackblitz-online-blue)](https://stackblitz.com/github/neo-hack/dayjs-plugin-template/tree/master)

[Edit on StackBlitz ⚡️](https://stackblitz.com/github/neo-hack/dayjs-plugin-template/tree/master)

## features

- 💪 Type safe - build with `typescript`
- ⚡ Fast - build with `esbuild`

## install
> demo usage of this repo

```sh
pnpm i @aiou/dayjs-plugin-template dayjs
```

## usage

### `Hello`

```ts
import Hello from '@aiou/dayjs-plugin-template'

dayjs.extend(Hello)
dayjs.hello().say()
```

params of `hello()`

- `word`
