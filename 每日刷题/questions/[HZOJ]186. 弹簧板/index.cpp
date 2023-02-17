/**
	https://oj.haizeix.com/problem/186
*/

// 1. f(i) 表示小球从 i 位置开始被弹出的次数
// 2. i >= n 表示需要0次
// 3. f(i) = f(i + a[i]) + 1

// f(i + a[i]) 表示下一个位置被弹出弹簧板的次数，那么也就意味着当前位置被弹出弹簧板次数在这个基础上 +1 即可


#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <vector>

using namespace std;

int f(int i, vector<int> &arr, int n) {
	if (i >= n) return 0;
	return f(i + arr[i], arr, n) + 1;
}

int main() {
	int n;
	vector<int> arr;
	cin >> n;
	for (int i = 0, a; i < n; i++) {
		cin >> a;
		arr.push_back(a);
	}

	cout << f(0, arr, n) << endl;

	return 0;
}