# homework2
## ๐ Requirements

### ํ์ ์๊ตฌ์ฌํญ
>์๋์ Todo ์ฑ ์๊ตฌ์ฌํญ์ ์ฐธ๊ณ ํ์ฌ

- ํ์ํ ๋ฐ์ดํฐ๋ฅผ ๋ชจ๋ TypeScript's Interface๋ก ๋ชจ๋ธ๋งํ๋ค.
- ์ฌ์ฉ๋๋ ๋ชจ๋  ํจ์๋ฅผ `์ ์ธ๋ถ๋ง` ๋ง๋ ๋ค.
  - ํจ์ ๋ฐ ํด๋์ค์ ๋ด๋ถ๋ ๊ตฌํํ์ง ์์ต๋๋ค.
- **Interface๋ง์ ๋ฐ๋ผ ์์ฑํ ์ฝ๋๊ฐ ๋์ํ๋ ์ ํ๋ฆฌ์ผ์ด์์ด ๋๋๋ก ์ ๋ํ์์ผํฉ๋๋ค.**

### Todo

```js
Todo {
  ์์ด๋(required),
  ๋ด์ฉ(required),
  ์๋ฃ์ฌ๋ถ(required),
  ์นดํ๊ณ ๋ฆฌ(required),
  ํ๊ทธ๋ค(optional),
}
```

#### CREATE

- ํ  ์ผ์ ์ถ๊ฐํ  ์ ์๋ค.
- ๋ด์ฉ์์ด ์ถ๊ฐํ  ์ ์๋ค.

#### READ

- ๋ชจ๋  ํ  ์ผ์ ์กฐํํ  ์ ์๋ค.
- ID๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํน์  ํ  ์ผ์ ์กฐํํ  ์ ์๋ค.

#### UPDATE

- ID๋ฅผ ์ ์ธํ ๋ชจ๋  ์์ฑ์ ์์ ํ  ์ ์๋ค.
- ํน์  ํ  ์ผ์ ํน์  ํ๊ทธ๋ฅผ ์์ ํ  ์ ์๋ค.

#### DELETE

- ID๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ํน์  ํ  ์ผ์ ์ญ์ ํ  ์ ์๋ค.
- ๋ชจ๋  ํ  ์ผ์ ์ ๊ฑฐํ  ์ ์๋ค.
- ํน์  ํ  ์ผ์ ํน์  ํ๊ทธ๋ฅผ ์ญ์ ํ  ์ ์๋ค.
- ํน์  ํ  ์ผ์ ๋ชจ๋  ํ๊ทธ๋ฅผ ์ ๊ฑฐํ  ์ ์๋ค.


#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```
# homework3
์ฑ๋ฆฐ์ง ๊ณผ์  ๊ฐ์ด๋
ํ ์๊ฐ์์ ํ์ดํ ์ฆ ์ค๊ณ & ๋ชจ๋ธ๋ง์ ์ค์ ๋ก ๊ตฌํํฉ๋๋ค.

๋์ค์ฝ๋/ํ๋ก ํธ์๋ ์ฑ๋ฆฐ์ง/์์ ๋ก์ด-์ด์ผ๊ธฐ ์ฑ๋์์ ์ํ๋ Interface ์ฝ๋๋ฅผ ๊ฐ์ ธ๋ค ์ฌ์ฉํ์ธ์
์ค๊ณ & ๋ชจ๋ธ๋ง ๋ Interface๋ฅผ ์ค์ ๋ก ๊ตฌํํ๋ ์ฑ๋ฆฐ์ง ๊ณผ์ ์๋๋ค.
๋ชจ๋  ์๊ตฌ์ฌํญ์ ์ค๊ณ & ๋ชจ๋ธ๋ง์ ๊ธฐ๋ฐ์ผ๋ก ์ํํฉ๋๋ค.
์ ์ถํ  ์ ์ฅ์ ๋ช์ wanted-pre-onboarding-challenge-fe-ts๋ก ์์ฑํด์ฃผ์ธ์. (Public ๊ถํ ํ์)
์ด๋ฏธ 1์ฐจ~2์ฐจ ๊ณผ์ ๋ฅผ ํตํด ์ ์ฅ์๋ฅผ ์์ฑํ๋ค๋ฉด ๋ณ๋์ ๋ธ๋์น๋ก ๊ด๋ฆฌํ์๋ ๊ฒ์ ์ถ์ฒํฉ๋๋ค.
์์ฑํ ๊ณผ์ ์ ์ ์ฅ์ ๋งํฌ๋ฅผ ๋์ค์ฝ๋/ํ๋ก ํธ์๋ ์ฑ๋ฆฐ์ง/์์ ๋ก์ด-์ด์ผ๊ธฐ ์ฑ๋์ ์ ์ถํด์ฃผ์ธ์.
README.md๋ฅผ ๊ผญ ์์ฑํด ์ฃผ์ธ์.
๋ณธ์ธ์ ๋ํ ์๊ฐ๋ ํ๋ก์ ํธ ์๊ฐ ๋ฑ ์์ ๋กญ๊ฒ ์์ฑํด์ฃผ์๋ฉด ๋ฉ๋๋ค.
๐ ํ์ ์๊ตฌ์ฌํญ
ํ ์๊ฐ์์ ํ์ดํ ์ฆ ์ค๊ณ & ๋ชจ๋ธ๋ง์ ์ค์ ๋ก ๊ตฌํํฉ๋๋ค.

์ค๊ณ & ๋ชจ๋ธ๋ง๋ TypeScript's Interface๋ฅผ ๋ฐ๋ผ ๋ด๋ถ ๊ตฌํ๋ถ๋ฅผ ๋ชจ๋ ์์ฑํ๋ค.
๋์๋์ง ์๋๋ผ๋ ์ค๊ณ & ๋ชจ๋ธ๋ง์ ์งํค๋ ๊ฒ์ด ์์น์ด๋ค.
์ ๋๋ก ๋์๊ณผ ๊ตฌํ์ ์ํด ์ค๊ณ & ๋ชจ๋ธ๋ง ๊ท์น์ ์ด๊ธฐ์ง ์์ต๋๋ค.
README.md ํน์ ๋ณ๋์ ๋ฌธ์์ ์ด๋ค ๋ถ๋ถ์ ํ์์ ๊ณ ์น๋ฉด ์ข์์ง ํผ๋๋ฐฑ๊ณผ ์ถ์ฒ ๋งํฌ๋ฅผ ๋จ๊น๋๋ค.
