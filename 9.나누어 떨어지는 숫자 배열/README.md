# โ๐ป <a href = "https://programmers.co.kr/learn/courses/30/lessons/12910" target=_blank >[๋๋์ด ๋จ์ด์ง๋ ์ซ์ ๋ฐฐ์ด]</a>

### ๐ ๋ฌธ์ ์ค๋ช

- array์ ๊ฐ element ์ค divisor๋ก ๋๋์ด ๋จ์ด์ง๋ ๊ฐ์ ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌํ ๋ฐฐ์ด์ ๋ฐํํ๋ ํจ์, solution์ ์์ฑํด์ฃผ์ธ์.
- divisor๋ก ๋๋์ด ๋จ์ด์ง๋ element๊ฐ ํ๋๋ ์๋ค๋ฉด ๋ฐฐ์ด์ -1์ ๋ด์ ๋ฐํํ์ธ์.

### ๐ ์ ํ์ฌํญ

- arr์ ์์ฐ์๋ฅผ ๋ด์ ๋ฐฐ์ด์๋๋ค.
- ์ ์ i, j์ ๋ํด i โ  j ์ด๋ฉด arr[i] โ  arr[j] ์๋๋ค.
- divisor๋ ์์ฐ์์๋๋ค.
- array๋ ๊ธธ์ด 1 ์ด์์ธ ๋ฐฐ์ด์๋๋ค.

### ๐ ์์ถ๋ ฅ ์

|      arr      | divisor |    return     |
| :-----------: | :-----: | :-----------: |
| [5, 9, 7, 10] |    5    |    [5, 10]    |
| [2, 36, 1, 3] |    1    | [1, 2, 3, 36] |
|    [3,2,6]    |   10    |     [-1]      |
