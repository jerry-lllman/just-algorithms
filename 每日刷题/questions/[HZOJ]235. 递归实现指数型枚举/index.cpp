/**
	https://oj.haizeix.com/problem/235
*/

#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <vector>

using namespace std;

int arr[10];

void print_one_result(int n) {
	for (int i = 0; i <= n; i++) {
		if (i) cout << " ";
		cout << arr[i];
	}
	cout << endl;
	return ;
}

// 第一步部分
// i 枚举的是第 i 位的值
// j 当前可以选取的最小的位置是 j
// n 我们最大可以选取的值是 n

void f(int i, int j, int n) {
// 第二部分
// j > n return 边界条件
	if (j > n) return ;
	for (int k = j; k <= n; k++) {
		arr[i] = k;
		print_one_result(i);
		f(i + 1, k + 1, n);
	}
}

int main() {
// 第三部分
// f(i, j, n) 等于什么， 其实就是递归的合集
	int n;
	cin >> n;
	f(0, 1, n);
		
	return 0;
}