/**
	https://oj.haizeix.com/problem/236
*/

#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <vector>

using namespace std;

// vis 记录每个数字是否被使用
int arr[10], vis[10] = {0};

void print_one_result(int n) {
	for (int i = 0; i < n; i++) {
		if (i) cout << " ";
		cout << arr[i];
	}
	cout << endl;
	return ;
}


void f(int i, int n) {
	// 边界条件
	if (i == n) {
		print_one_result(n);
		return ;
	}

	for (int k = 1; k <= n; k++) {
		if (vis[k]) continue;
		arr[i] = k;
		vis[k] = 1;
		f(i + 1, n);
		vis[k] = 0;
	}

	return ;
}

int main() {

	int n;
	cin >> n;

	f(0, n);

	return 0;
}