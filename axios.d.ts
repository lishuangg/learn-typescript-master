// .d.ts 文件是 TypeScript 的声明文件（Declaration Files）
// 只有类型 不包含具体实现

// 1. 
// declare function axios(url: string): string;

// 2. 
interface IAxios {
  get: (url: string) => string;
  post: (url: string, data: any) => string;
}

declare const axios: IAxios;