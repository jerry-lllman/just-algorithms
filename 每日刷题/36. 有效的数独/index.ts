/**
 * @leetcode https://leetcode.cn/problems/valid-sudoku/
 */

 function isValidSudoku(board: string[][]): boolean {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c !== '.') {
        const index = c.charCodeAt(0) - '0'.charCodeAt(0) - 1; // Number(c)
        rows[i][index]++; // 记录 横向
        columns[j][index]++; // 记录 竖向
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++; // 记录 九宫格
        // 判断出现次数
        if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false;
        }
      }
    }
  }
  return true;
};