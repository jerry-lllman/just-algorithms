/**
	https://oj.haizeix.com/problem/184
*/

#include <iostream>
#include <cstdio>
#include <cstdlib>

using namespace std;

int f(int n) {
	if (n == 1) return 1;
	return (f(n - 1) + 1) * 2
}

int main() {
	int n;
	cin >> n;
	cout << f(n) << endl;
	return 0;
}