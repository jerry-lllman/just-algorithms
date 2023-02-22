/**
	https://oj.haizeix.com/problem/236
*/

#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <vector>

using namespace std;

// 1. f(i, j, n, m)
// i 当前枚举的位置
// j 当前位置最小可以选择的值
// n 最大可以选择的值
// m 最多可以选择多少位

// 2. 当 i = m 没必要枚举了，return。边界条件


int arr[10];


void print_one_result(int n) {
	for (int i = 0; i < n; i++) {
		if (i) cout << " ";
		cout << arr[i];
	}
	cout << endl;
}

void f(int i, int j, int n, int m) {

	if (i == m) {
		// 当 i 等于 m 时，表示已经枚举了 m 位了，需要进行输出
		print_one_result(m);
	}

	for (int k = j; k <= n && m - i - 1 <= n - k; k++) {
		arr[i] = k;
		f(i + 1, k + 1, n, m);
	}

	return ;
}



int main() {
	int n, m;
	cin >> n >> m;
	f(0, 1, n, m);

	return 0;
}