# โ๐ป <a href = "https://programmers.co.kr/learn/courses/30/lessons/12916" target=_blank >[๋ฌธ์์ด ๋ด p์ y์ ๊ฐ์]</a>

### ๐ ๋ฌธ์ ์ค๋ช

- ๋๋ฌธ์์ ์๋ฌธ์๊ฐ ์์ฌ์๋ ๋ฌธ์์ด s๊ฐ ์ฃผ์ด์ง๋๋ค. s์ 'p'์ ๊ฐ์์ 'y'์ ๊ฐ์๋ฅผ ๋น๊ตํด ๊ฐ์ผ๋ฉด True, ๋ค๋ฅด๋ฉด False๋ฅผ return ํ๋ solution๋ฅผ ์์ฑํ์ธ์. 'p', 'y' ๋ชจ๋ ํ๋๋ ์๋ ๊ฒฝ์ฐ๋ ํญ์ True๋ฅผ ๋ฆฌํดํฉ๋๋ค. ๋จ, ๊ฐ์๋ฅผ ๋น๊ตํ  ๋ ๋๋ฌธ์์ ์๋ฌธ์๋ ๊ตฌ๋ณํ์ง ์์ต๋๋ค.
- ์๋ฅผ ๋ค์ด s๊ฐ "pPoooyY"๋ฉด true๋ฅผ returnํ๊ณ  "Pyy"๋ผ๋ฉด false๋ฅผ returnํฉ๋๋ค.

### ๐ ์ ํ์ฌํญ

- ๋ฌธ์์ด s์ ๊ธธ์ด : 50 ์ดํ์ ์์ฐ์
- ๋ฌธ์์ด s๋ ์ํ๋ฒณ์ผ๋ก๋ง ์ด๋ฃจ์ด์ ธ ์์ต๋๋ค.

### ๐ ์์ถ๋ ฅ ์

|     s     | answer |
| :-------: | :----: |
| "pPoooyY" |  true  |
|   "Pyy"   | false  |

### ๐ ์์ถ๋ ฅ ์ ์ค๋ช

- ์์ถ๋ ฅ ์ #1
  'p'์ ๊ฐ์ 2๊ฐ, 'y'์ ๊ฐ์ 2๊ฐ๋ก ๊ฐ์ผ๋ฏ๋ก true๋ฅผ return ํฉ๋๋ค.
- ์์ถ๋ ฅ ์ #2
  'p'์ ๊ฐ์ 1๊ฐ, 'y'์ ๊ฐ์ 2๊ฐ๋ก ๋ค๋ฅด๋ฏ๋ก false๋ฅผ return ํฉ๋๋ค.
