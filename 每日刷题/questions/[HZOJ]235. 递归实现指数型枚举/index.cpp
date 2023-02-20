#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <vector>

using namespace std;

int arr[10];

void print_one_result(int n) {
	cout << "___";
	cout << n;
	cout << "___" << endl;
	for (int i = 0; i <= n; i++) {
		if (i) cout << " ";
		cout << arr[i];
	}
	cout << endl;
	return ;
}


void fn(int i, int j, int n) {
	if (j > n) return ;
	for (int k = j; k <= n; k++) {
		arr[i] = k;
		print_one_result(i);
		fn(i + 1, k + 1, n);
	}
	return ;
}

int main() {
	int n;
	cin >> n;

	fn(0, 1, n);

	return 0;
}